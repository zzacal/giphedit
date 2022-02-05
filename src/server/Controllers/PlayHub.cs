using Giphedit.Models;
using Giphedit.Services;
using Microsoft.AspNetCore.SignalR;

namespace Giphedit.Hubs;

public class PlayHub : Hub
{
  private readonly IGameService _games;
  public PlayHub(ILogger<PlayHub> logger, IGameService gameService)
  {
    _games = gameService;
  }

  public async Task Join(string gameId, string playerId)
  {
    await Groups.AddToGroupAsync(Context.ConnectionId, gameId);
    var result = await _games.JoinGame(gameId, playerId);
    await SendGame(gameId, result);
  }

  public async Task Play(string gameId, string playerId, string cardId)
  {
    var result = await _games.Play(gameId, playerId, cardId);
    await SendGame(gameId, result);
  }

  public async Task Judge(string gameId, string playerId, string cardId)
  {
    var result = await _games.Judge(gameId, playerId, cardId);
    await SendGame(gameId, result);
  }

  public async Task Start(string gameId, int turns, int handSize, string rating)
  {
    var result = await _games.Start(gameId, turns, handSize, rating);
    await SendGame(gameId, result);
  }

  public async Task SendGame(string room, Game game)
  {
    await Clients.Group(room).SendAsync("ReceiveGame", game);
  }
}
