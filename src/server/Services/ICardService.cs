using Giphedit.Models;

namespace Giphedit.Services;

public interface ICardService
{
  Task<IEnumerable<Card>> GetCards(int count, string rating);
}
