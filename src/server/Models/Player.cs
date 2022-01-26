using System.Collections.Generic;

namespace Giphedit.Models;

public class Player {
  public Player(string id, string name)
  {
    Id = id;
    Name = name;    
  }

  public string Id { get; set; }
  public string Name { get; set; }
  public List<Card> Hand { get; set; } = new List<Card>();
}
