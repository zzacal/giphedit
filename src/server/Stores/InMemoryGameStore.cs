using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Stores;

public class InMemoryGameStore : IGameStore
{
  private readonly Dictionary<string, Game> _games = new Dictionary<string, Game>();
  public Task<Game> Create(Game game)
  {
    var newGame = Guid.NewGuid().ToString();
    game.Id = Guid.NewGuid().ToString();
    _games.Add(game.Id, game);
    return Task.FromResult(game);
  }

  public Task<Game?> Get(string id)
  {
    _games.TryGetValue(id, out var game);
    return Task.FromResult(game);
  }

  public Task<Game?> Update(Game game)
  {
    if(_games.ContainsKey(game.Id)) {
      _games[game.Id] = game;
      return Task.FromResult<Game?>(game);
    }
    return Task.FromResult<Game?>(null);
  }
}
