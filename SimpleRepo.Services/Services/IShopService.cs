using SimpleRepo.Services.DTO;
using System.Collections.Generic;

namespace SimpleRepo.Services.Services
{
    public interface IShopService
    {
        public IEnumerable<ShopItemDTO> GetAllShopItems();
    }
}