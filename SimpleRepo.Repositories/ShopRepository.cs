using SimpleRepo.Repositories.Data;
using SimpleRepo.Repositories.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleRepo.Repositories
{
    public class ShopRepository : IShopRepository
    {
        private readonly ShopContext _context;

        public ShopRepository(ShopContext context)
        {
            _context = context;
        }

        public IEnumerable<ShopItem> GetAllShopItems()
        {
            return _context.ShopItems;
        }
    }
}
