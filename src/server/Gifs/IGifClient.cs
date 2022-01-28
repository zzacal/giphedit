namespace Giphedit.Gifs;

public interface IGifClient {
  Task<IEnumerable<string>> Get(int count, string rating);
}
