namespace Giphedit.Models;

public class Game
{
  public Game(string id, string name)
  {
    Id = id;
    Name = name;
  }

  public string Id { get; set; }
  public string Name { get; set; }
}
