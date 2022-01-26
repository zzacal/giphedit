using System.Collections.Generic;
using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Services;

public interface ICardService
{
  Task<IEnumerable<Card>> GetCards(int count);
}