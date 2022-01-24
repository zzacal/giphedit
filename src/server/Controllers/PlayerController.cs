using System.Threading.Tasks;
using Giphedit.Models;
using Giphedit.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Giphedit.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayerController : ControllerBase {
  private readonly IPlayerService _service;
  private readonly ILogger<PlayerController> _logger;

  public PlayerController(ILogger<PlayerController> logger, IPlayerService service) {
    _logger = logger;
    _service = service;
  }

  [HttpGet]
  [Route("/player/{id?}")]
  public async Task<Player> Get(string? id = null) 
  {
    return id == null 
              ? await _service.New() 
              : await _service.Get(id) ?? await _service.New();
  }
}
