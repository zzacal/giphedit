using System.Threading.Tasks;
using Giphedit.Models;
using Giphedit.Stores;

namespace Giphedit.Services;

public class PlayerService : IPlayerService
{
  private readonly IPlayerStore _store;

  public PlayerService(IPlayerStore playerStore)
  {
    _store = playerStore;
  }
  public async Task<Player> Get(string id)
  {
    return await _store.Get(id) ?? await _store.Create(string.Empty);
  }

  public async Task<Player> New(string name)
  {
    return await _store.Create(name);
  }

  public async Task<Player> Rename(string id, string name)
  {
    var player = await _store.Get(id);
    if (player == null)
    {
      return await _store.Create(name);
    }

    player.Name = name;
    return await _store.Update(player) ?? await _store.Create(name);
  }
}
