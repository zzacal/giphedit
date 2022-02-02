using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Services;

public interface IGameService {
  Task<Game> CreateGame();
  Task<Game> GetOrCreateGame(string? gameId);
  Task<Game?> FindGame(string name);
  Task<Game> JoinGame(string gameId, string playerId);
  Task<Game> Start(string gameId);
  Task<Game> Play(string gameId, string playerId, string cardId);
  Task<Game> Judge(string gameId, string playerId, string cardId);
}
