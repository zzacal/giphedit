using System.Collections.Generic;
using System.Threading.Tasks;
using Giphedit.Models;

namespace Giphedit.Services;

public class MockCardService : ICardService
{
  public Task<IEnumerable<Card>> GetCards(int count)
  {
    var cards = new Card[count];
    for(var i = 0; i < count; i++) 
    {
      cards[i] = new Card(i.ToString(), i.ToString());
    }

    return Task.FromResult<IEnumerable<Card>>(cards);
  }
}
