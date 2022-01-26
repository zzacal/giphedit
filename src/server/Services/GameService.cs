using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Giphedit.Models;
using Giphedit.Stores;

namespace Giphedit.Services;

public class GameService : IGameService
{
  private readonly IGameStore _games;
  private readonly IPlayerService _players;
  private readonly ICardService _cards;
  public GameService(IGameStore store, IPlayerService playerService, ICardService cardService)
  {
    _games = store;
    _players = playerService;
    _cards = cardService;
  }

  // RULES
  private static int turnPerPlayer = 2;
  private static int playerHandSize = 7;

  // Calculations
  private static int countTurns(int playerCount, int turnsPerPlayer) => playerCount * turnsPerPlayer;
  private static int countDrawStack(int playerCount, int turnsPerPlayer) => countTurns(playerCount, turnsPerPlayer) * (playerCount - 1);
  private static int countPlayerHandCards(int playerCount, int handCount) => playerCount * handCount;

  private async Task<Game> UpdateGame(Game game)
  {
    var result = await _games.Update(game);
    if (result == null)
    {
      throw new GameNotFoundException(game.Id);
    }
    return result;
  }
  private static Game AdvanceTurn(Game game) 
  {
    if(game.IsEnded || !game.TurnCardStack.TryPop(out var nextCard)) {
      game.IsEnded = true;
      return game;
    }

    var nextJudgeIndex = 
      game.Turns.TryPeek(out var last) && game.Players.FindIndex(p => p.Id == last.Judge.Id) < game.Players.Count 
        ? game.Players.FindIndex(p => p.Id == last.Judge.Id) + 1
        : 0;
    var next = new Turn(nextCard, game.Players[nextJudgeIndex]);

    game.Turns.Push(next);

    return game;
  }

  private async Task<Game> GetGameOrThrow(string gameId) {
    var game = await _games.Get(gameId);
    if(game == null) {
      throw new GameNotFoundException(gameId);
    }
    return game;
  }
  public async Task<Game> Judge(string gameId, string playerId, string cardId) {
    var game = await GetGameOrThrow(gameId);
    var turn = game.Turns.Peek();

    // Need a new turn
    if (turn == null || turn.Winner != null) {
      return AdvanceTurn(game);
    }

    // Turn is not over
    if (turn.Plays.Count < game.Players.Count - 1) {
      return game;
    }

    // Wrong judge or missing card
    if(turn.Judge.Id != playerId
      || !turn.Plays.Any(c => c.Id == cardId)) {
        return game;
      }

    turn.Winner = turn.Plays.First(c => c.Id == cardId);
    return await UpdateGame(AdvanceTurn(game));
  }

  public async Task<Game> Play(string gameId, string playerId, string cardId)
  {
    var game = await GetGameOrThrow(gameId);

    var player = game.Players.First(p => p.Id == playerId);
    var card = player.Hand.First(c => c.Id == cardId);
    player.Hand.Remove(card);

    var turn = game.Turns.Peek();
    turn.Plays.Add(card);
    
    return await UpdateGame(game);
  }
  
  public async Task<Game> Start(string gameId)
  {
    var game = await GetGameOrThrow(gameId);

    // Calculate cahdz needed
    var turnCount = countTurns(game.Players.Count, turnPerPlayer);
    var drawStackCount = countDrawStack(game.Players.Count, turnPerPlayer);
    var playerCardCount = countPlayerHandCards(game.Players.Count, playerHandSize);

    // Retrieve and hand-out cards
    var cards = await _cards.GetCards(turnCount + drawStackCount + playerCardCount);
    game.TurnCardStack = new Stack<Card>(cards.Skip(0).Take(turnCount));
    game.DrawStack = new Stack<Card>(cards.Skip(turnCount).Take(drawStackCount));
    for (var x = 0; x < game.Players.Count; x++) 
    {
      var taken = turnCount + drawStackCount + (x * playerHandSize);
      game.Players[x].Hand = cards.Skip(taken).Take(playerHandSize).ToList();
    }

    return await UpdateGame(AdvanceTurn(game));
  }

  public async Task<Game> JoinGame(string gameId, string playerId)
  {
    var game = await GetGameOrThrow(gameId);
    var player = await _players.Get(playerId);
    if (player == null)
    {
      throw new PlayerNotFoundException(playerId);
    }

    var existingPlayer = game.Players.FirstOrDefault(p => p.Id == playerId);
    if (existingPlayer != null)
    {
      existingPlayer = player;
    }
    else
    {
      game.Players.Add(player);
    }

    var result = await _games.Update(game);

    if (result == null)
    {
      throw new GameNotFoundException(gameId);
    }

    return result;
  }

  public async Task<Game> CreateGame()
  {
    var game = new Game(string.Empty, RandomStringProvider.Get(5));
    return await _games.Create(game);
  }

  public async Task<Game> GetOrCreateGame(string? gameId)
  {
    if(string.IsNullOrWhiteSpace(gameId)) {
      return await CreateGame();
    }
    return await _games.Get(gameId) ?? await CreateGame();
  }

}

public static class RandomStringProvider
{
  private static Random random = new Random();
  static string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  public static string Get(int length)
  {
    return new string(Enumerable.Repeat(chars, length)
      .Select(s => s[random.Next(s.Length)]).ToArray());
  }
}
