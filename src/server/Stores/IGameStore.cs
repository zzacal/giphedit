using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Stores;

public interface IGameStore {
  Task<Game> Create(Game game);
  Task<Game?> Get(string id);
  Task<Game?> Update(Game game);
}