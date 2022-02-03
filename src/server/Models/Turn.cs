using System.Collections.Generic;

namespace Giphedit.Models;

public class Turn
{
  public Turn(Card card, Player judge)
  {
    Card = card;
    Judge = judge;
  }
  public Card Card { get; set; }
  public Player Judge { get; set; }
  public List<TurnPlay> Plays { get; set; } = new List<TurnPlay>();
  public TurnPlay? Winner { get; set; }
}
