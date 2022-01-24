using System;
using System.Linq;
using System.Threading.Tasks;
using Giphedit.Models;
using Giphedit.Stores;

namespace Giphedit.Services;

public class GameService : IGameService
{
  private readonly IGameStore _store;
  public GameService(IGameStore store)
  {
    _store = store;
  }

  async Task<Game> IGameService.CreateGame()
  {
    var game = new Game(string.Empty, RandomStringProvider.Get(5));
    return await _store.CreateGame(game);
  }

  async Task<Game> IGameService.GetGame(string id)
  {
    return await _store.GetGame(id);
  }

  async Task<Game> IGameService.UpdateGame(Game game)
  {
    return await _store.UpdateGame(game);
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
