using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Giphedit.Gifs;
using Giphedit.Models;

namespace Giphedit.Services;

public class CardService : ICardService
{
  IGifClient _gifs;
  public CardService(IGifClient gifs)
  {
    _gifs = gifs;
  }
  public async Task<IEnumerable<Card>> GetCards(int count, string rating)
  {
    return (await _gifs.Get(count, rating)).Select(g => new Card(g,g));
  }
}
