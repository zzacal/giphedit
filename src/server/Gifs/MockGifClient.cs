namespace Giphedit.Gifs;

public class MockGifClient : IGifClient
{
  const string sample = "https://media2.giphy.com/media/10JhviFuU2gWD6/giphy.gif";
  public Task<IEnumerable<string>> Get(int count, string _rating)
  {
    return Task.FromResult(Enumerable.Repeat(1, count).Select(i => sample));
  }
}
