using System.Threading.Tasks;
using Giphedit.Models;
using Giphedit.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Giphedit.Controllers;

[ApiController]
[Route("[controller]")]
public class GameController : ControllerBase {
  private readonly IGameService _service;
  private readonly ILogger<GameController> _logger;

  public GameController(ILogger<GameController> logger, IGameService service) {
    _logger = logger;
    _service = service;
  }

  [HttpGet]
  public async Task<Game> Get() 
  {
    return await _service.CreateGame();
  }
}
