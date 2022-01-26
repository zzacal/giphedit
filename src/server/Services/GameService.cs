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
  static int turnPerPlayer = 2;
  static int playerHandSize = 7;


  private int countTurns(int playerCount, int turnsPerPlayer) => playerCount * turnsPerPlayer;
  private int countDrawStack(int playerCount, int turnsPerPlayer) => countTurns(playerCount, turnsPerPlayer) * playerCount;
  private int countPlayerHandCards(int playerCount, int handCount) => playerCount * handCount;
  public async Task<Game> Start(string id)
  {
    var game = await _games.Get(id);
    if (game == null)
    {
      throw new GameNotFoundException(id);
    }

    var turnCount = countTurns(game.Players.Count, turnPerPlayer);
    var drawStackCount = countDrawStack(game.Players.Count, turnPerPlayer);
    var playerCardCount = countPlayerHandCards(game.Players.Count, playerHandSize);

    var cards = await _cards.GetCards(turnCount + drawStackCount + playerCardCount);

    game.TurnCardStack = new Stack<Card>(cards.Skip(0).Take(turnCount));
    game.DrawStack = new Stack<Card>(cards.Skip(turnCount).Take(drawStackCount));
    
    for (var x = 0; x < game.Players.Count; x++) 
    {
      var taken = turnCount + drawStackCount + (x * playerHandSize);
      game.Players[x].Hand = cards.Skip(taken).Take(playerHandSize).ToList();
    }

    return await UpdateGame(game);
  }

  public async Task<Game> JoinGame(string id, string playerId)
  {
    var player = await _players.Get(playerId);
    var game = await _games.Get(id);
    if (player == null)
    {
      throw new PlayerNotFoundException(playerId);
    }

    if (game == null)
    {
      throw new GameNotFoundException(id);
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
      throw new GameNotFoundException(id);
    }

    return result;
  }

  public async Task<Game> CreateGame()
  {
    var game = new Game(string.Empty, RandomStringProvider.Get(5));
    return await _games.Create(game);
  }

  public async Task<Game> GetGame(string id)
  {
    return await _games.Get(id) ?? await CreateGame();
  }

  public async Task<Game> UpdateGame(Game game)
  {
    var result = await _games.Update(game);
    if (result == null)
    {
      throw new GameNotFoundException(game.Id);
    }
    return result;
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
