using System;

namespace SimpleRepo.API
{
    public class ShopItem
    {
        public string Name { get; set; }

        public decimal Price { get; set; }

        public ShopItem(string name, decimal price)
        {
            Name = name;
            Price = price;
        }
    }
}
