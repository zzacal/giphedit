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

  [HttpPost]
  [Route("/player/{name?}")]
  public async Task<Player> Post(string name = "") 
  {
    return await _service.New(name);
  }

  [HttpGet]
  [Route("/player/{id?}")]
  public async Task<Player> Get(string? id = null) 
  {
    return id == null 
              ? await _service.New(string.Empty) 
              : await _service.Get(id) ?? await _service.New(string.Empty);
  }

  [HttpPut]
  [Route("/player/{id}/rename/{name}")]
  public async Task<Player> Rename(string id, string name) 
  {
    return await _service.Rename(id, name);
  }
}
