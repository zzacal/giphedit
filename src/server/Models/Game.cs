using System.Collections.Generic;

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
  public List<Player> Players { get; set; } = new List<Player>();
  public Stack<Card> TurnCardStack { get; set; } = new Stack<Card>();
  public Stack<Card> DrawStack { get; set; } = new Stack<Card>();
}
