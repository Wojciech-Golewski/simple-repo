using SimpleRepo.Repositories;
using SimpleRepo.Services.DTO;
using SimpleRepo.Services.Mappings;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleRepo.Services.Services
{
    public class ShopService : IShopService
    {
        private readonly IShopRepository _shopRepository;
        private readonly DataMapper _dataMapper;

        public ShopService(IShopRepository shopRepository, DataMapper dataMapper)
        {
            _shopRepository = shopRepository;
            _dataMapper = dataMapper;
        }

        public IEnumerable<ShopItemDTO> GetAllShopItems()
        {
            var shopItems = _shopRepository.GetAllShopItems();
            return _dataMapper.Map(shopItems);
        }
    }
}
