using SimpleRepo.Repositories.Models;
using SimpleRepo.Services.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleRepo.Services.Mappings
{
    public class DataMapper
    {
        public ShopItemDTO Map(ShopItem shopItem)
        {
            var shopItemDTO = new ShopItemDTO()
            {
                Name = shopItem.Name,
                Price = shopItem.Price
            };

            return shopItemDTO;
        }

        public IEnumerable<ShopItemDTO> Map(IEnumerable<ShopItem> shopItems)
        {
            var shopItemsDTO = new List<ShopItemDTO>();
            foreach (var shopItem in shopItems)
            {
                var shopItemDTO = Map(shopItem);
                shopItemsDTO.Add(shopItemDTO);
            }

            return shopItemsDTO;
        }
    }
}
