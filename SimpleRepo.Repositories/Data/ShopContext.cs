using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using SimpleRepo.Repositories.Models;
using System;
using System.Collections.Generic;
using System.IO;
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

    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<ShopContext>
    {
        public ShopContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(@Directory.GetCurrentDirectory() + "/../SimpleRepo.API/appsettings.json")
                .Build();
            var builder = new DbContextOptionsBuilder<ShopContext>();
            var connectionString = configuration.GetConnectionString("ShopContext");
            builder.UseSqlServer(connectionString);
            return new ShopContext(builder.Options);
        }
    }
}
