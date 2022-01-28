using System.Text.Json;

namespace Giphedit.Gifs;

public class GiphyClient : IGifClient
{
  private string _apiKey;
  private HttpClient _web = new HttpClient();
  public GiphyClient(string apiKey)
  {
    _apiKey = apiKey;
    _web.BaseAddress = new System.Uri("https://api.giphy.com");
  }

  private string getSearchReq(string q, string rating, int limit) => @$"/v1/gifs/search?api_key={_apiKey}&q={q}&limit={limit}&offset=0&rating={rating}&lang=en";
  
  private string getTrendingReq(int limit, string rating) => $"/v1/gifs/trending?api_key={_apiKey}&limit={limit}&offset=0&rating={rating}";
  public async Task<IEnumerable<string>> Get(int count, string rating)
  {
    var request = getTrendingReq(count, rating);
    var response = await _web.GetAsync(request);
    var message = await response.Content.ReadAsStringAsync();
    var json = JsonDocument.Parse(message);
    return 
      json.RootElement
        .GetProperty("data")
        .EnumerateArray()
        .Select( x => 
          x.GetProperty("images")
           .GetProperty("original")
           .GetProperty("url")
           .ToString());
  }
}
