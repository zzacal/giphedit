using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Stores;

public class InMemoryPlayerStore : IPlayerStore
{
  private readonly Dictionary<string, Player> _players = new Dictionary<string, Player>();
  public Task<Player> Create(string name)
  {
    var player = new Player(Guid.NewGuid().ToString(), name);
    _players.Add(player.Id, player);
    return Task.FromResult(player);
  }

  public Task<Player?> Get(string id)
  {
    return Task.FromResult(_players.TryGetValue(id, out var player) ? player : null);
  }

  public Task<Player?> Update(Player player)
  {
    if(_players.ContainsKey(player.Id))
    {
      _players[player.Id] = player;
      return Task.FromResult<Player?>(player);
    }
    
    return Task.FromResult<Player?>(null);
  }
}
