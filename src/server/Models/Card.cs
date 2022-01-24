namespace Giphedit.Models
{
  public class Card
  {
    public Card(string id, string imgUrl)
    {
      Id = id;
      ImgUrl = imgUrl;
    }

    public string Id { get; set; }
    public string ImgUrl { get; set; }
  }
}
