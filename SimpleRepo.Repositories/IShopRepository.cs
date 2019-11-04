using SimpleRepo.Repositories.Models;
using System.Collections.Generic;

namespace SimpleRepo.Repositories
{
    public interface IShopRepository
    {
        public IEnumerable<ShopItem> GetAllShopItems();
    }
}