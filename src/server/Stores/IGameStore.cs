using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Stores;

public interface IGameStore {
  Task<Game> CreateGame(Game game);
  Task<Game?> GetGame(string id);
  Task<Game?> UpdateGame(Game game);
}