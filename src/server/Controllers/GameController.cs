using Giphedit.Models;
using Giphedit.Services;
using Microsoft.AspNetCore.Mvc;

namespace Giphedit.Controllers;

[ApiController]
[Route("[controller]")]
public class GameController : ControllerBase
{
  private readonly IGameService _service;
  private readonly ILogger<GameController> _logger;

  public GameController(ILogger<GameController> logger, IGameService service)
  {
    _logger = logger;
    _service = service;
  }

  [HttpGet]
  [Route("/game/{id?}")]
  public async Task<Game> Get(string? id = null)
  {
    return await _service.GetOrCreateGame(id);
  }

  [HttpGet]
  [Route("/game/find/{name}")]
  public async Task<Game?> Find(string name)
  {
    return await _service.FindGame(name);
  }

  [HttpGet]
  [Route("/game/{id}/join/{playerId}")]
  public async Task<Game> Join(string id, string playerId)
  {
    return await _service.JoinGame(id, playerId);
  }

  [HttpGet]
  [Route("/game/{id}/start/{turns}/{handSize}/{rating}")]
  public async Task<Game> Start(string id, int turns, int handSize, string rating) 
  {
    return await _service.Start(id, turns, handSize, rating);
  }

  [HttpGet]
  [Route("/game/{id}/play/{playerId}/{cardId}")]
  public async Task<Game> Play(string id, string playerId, string cardId) 
  {
    return await _service.Play(id, playerId, cardId);
  }

  [HttpGet]
  [Route("/game/{id}/judge/{playerId}/{cardId}")]
  public async Task<Game> Judge(string id, string playerId, string cardId) 
  {
    return await _service.Judge(id, playerId, cardId);
  }
}
