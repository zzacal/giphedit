using Giphedit.Services;
using Microsoft.AspNetCore.SignalR;

namespace Giphedit.Hubs;

public class PlayHub : Hub
{
  private readonly IGameService _games;
  public PlayHub(ILogger<PlayHub> logger, IGameService gameService){
    _games = gameService;
  }

  public async Task Join(string gameId, string playerId)
  {
    var result = await _games.JoinGame(gameId, playerId);
    await Clients.All.SendAsync("ReceiveGame", result);
  }
  
  public async Task SendMessage(string gameId, string playerId, string message)
  {
    await Clients.All.SendAsync("ReceiveMessage", gameId, playerId, message);
  }

  public async Task Play(string gameId, string playerId, string cardId)
  {
    var result = await _games.Play(gameId, playerId, cardId);
    await Clients.All.SendAsync("ReceiveGame", result);
  }

  public async Task Judge(string gameId, string playerId, string cardId)
  {
    var result = await _games.Judge(gameId, playerId, cardId);
    await Clients.All.SendAsync("ReceiveGame", result);
  }

  public async Task Start(string id, int turns, int handSize, string rating)
  {
    var result = await _games.Start(id, turns, handSize, rating);
    await Clients.All.SendAsync("ReceiveGame", result);
  }
}
