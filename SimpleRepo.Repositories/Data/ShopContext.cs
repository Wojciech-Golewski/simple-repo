using Microsoft.EntityFrameworkCore;
using SimpleRepo.Repositories.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleRepo.Repositories.Data
{
    public class ShopContext : DbContext
    {
        public ShopContext(DbContextOptions<ShopContext> options) : base(options)
        {

        }

        public DbSet<ShopItem> ShopItems { get; set; }
    }
}
