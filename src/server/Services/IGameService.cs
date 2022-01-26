using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Services;

public interface IGameService {
  Task<Game> CreateGame();
  Task<Game> GetGame(string id);
  Task<Game> UpdateGame(Game game);
  Task<Game> JoinGame(string id, string playerId);
  Task<Game> Start(string id);
}
