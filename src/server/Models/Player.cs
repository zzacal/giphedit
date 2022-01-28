using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Giphedit.Models;

public class Player {
  public Player(string name)
  {
    Name = name;    
  }

  [BsonRepresentation(BsonType.ObjectId)]
  public string? Id { get; set; }
  public string Name { get; set; }
  public List<Card> Hand { get; set; } = new List<Card>();
}
