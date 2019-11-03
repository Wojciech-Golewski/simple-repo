using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SimpleRepo.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShopController : ControllerBase
    {
        private readonly ILogger<ShopController> _logger;
        private static readonly ShopItem ShopData = new ShopItem("Item One", 25);

        public ShopController(ILogger<ShopController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ShopItem Get()
        {
            return ShopData;
        }
    }
}
