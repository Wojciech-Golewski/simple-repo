using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SimpleRepo.Services.DTO;
using SimpleRepo.Services.Services;
using System.Collections.Generic;

namespace SimpleRepo.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShopController : ControllerBase
    {
        private readonly IShopService _shopService;
        private readonly ILogger<ShopController> _logger;

        public ShopController(IShopService shopService, ILogger<ShopController> logger)
        {
            _shopService = shopService;
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ShopItemDTO> Get()
        {
            return _shopService.GetAllShopItems();
        }
    }
}
