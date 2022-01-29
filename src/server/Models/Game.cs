using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Giphedit.Models;

public class Game
{
  public Game(string name)
  {
    Name = name;
  }

  [BsonRepresentation(BsonType.ObjectId)]
  public string? Id { get; set; }
  public string Name { get; set; }
  public string Rating { get; set; } = "g";
  public List<Player> Players { get; set; } = new List<Player>();
  public Stack<Card> TurnCardStack { get; set; } = new Stack<Card>();
  public Stack<Card> DrawStack { get; set; } = new Stack<Card>();
  public Stack<Turn> Turns { get; set; } = new Stack<Turn>();
  public bool IsStarted { get; set; } = false;
  public bool IsEnded { get; set; } = false;
}
