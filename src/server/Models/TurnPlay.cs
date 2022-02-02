namespace Giphedit.Models;

public class TurnPlay : Card {
  public TurnPlay(string cardId, string imgUrl, string playerId) : base(cardId, imgUrl)
  {
    PlayerId = playerId;
  }

  public string? PlayerId { get; set; }
}