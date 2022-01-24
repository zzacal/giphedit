using System;
using System.Linq;
using System.Threading.Tasks;
using Giphedit.Models;
using Giphedit.Stores;

namespace Giphedit.Services;

public class GameService : IGameService
{
  private readonly IGameStore _games;
  private readonly IPlayerService _players;
  public GameService(IGameStore store, IPlayerService playerService)
  {
    _games = store;
    _players = playerService;
  }

  public async Task<Game> JoinGame(string id, string playerId)
  {
    var player = await _players.Get(playerId);
    var game = await _games.Get(id);
    if (player == null) {
      throw new PlayerNotFoundException(playerId);
    }

    if (game == null) {
      throw new GameNotFoundException(id);
    }

    var existingPlayer = game.Players.FirstOrDefault(p => p.Id == playerId);
    if (existingPlayer != null) {
      existingPlayer = player;
    } else {
      game.Players.Add(player);
    }

    var result = await _games.Update(game);

    if (result == null) {
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
    return await _games.Get(id);
  }

  public async Task<Game> UpdateGame(Game game)
  {
    return await _games.Update(game);
  }

}

public static class RandomStringProvider {
  private static Random random = new Random();
  static string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  public static string Get(int length)
  {
    return new string(Enumerable.Repeat(chars, length)
      .Select(s => s[random.Next(s.Length)]).ToArray());
  }
}
