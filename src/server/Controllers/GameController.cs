using System.Threading.Tasks;
using Giphedit.Models;
using Giphedit.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
    return id == null
              ? await _service.CreateGame()
              : await _service.GetGame(id) ?? await _service.CreateGame();
  }

  [HttpGet]
  [Route("/game/{id}/join/{playerId}")]
  public async Task<Game> Join(string id, string playerId)
  {
    return await _service.JoinGame(id, playerId);
  }
}
