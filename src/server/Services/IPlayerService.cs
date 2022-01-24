using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Services;

public interface IPlayerService
{
  Task<Player> New();
  Task<Player> Get(string id);
  Task<Player> Rename(string id, string name);
}