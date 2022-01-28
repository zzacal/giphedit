using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Services;

public interface IPlayerService
{
  Task<Player> New(string name);
  Task<Player> Get(string id);
  Task<Player> Rename(string id, string name);
}