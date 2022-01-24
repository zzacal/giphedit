using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Stores;

public interface IPlayerStore 
{
  Task<Player> Create(string name);
  Task<Player?> Get(string id);
  Task<Player?> Update(Player player);
}
