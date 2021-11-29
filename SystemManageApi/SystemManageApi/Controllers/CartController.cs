using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SystemManageApi.Authentication;
using SystemManageApi.Models;
using Microsoft.Extensions.Logging;



namespace SystemManageApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly CartDbContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;


        public CartController(CartDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Vehicle
        [HttpGet]


        public async Task<ActionResult<IEnumerable<Cart>>> GetVehicles()
        {
            return await _context.Carts
                .Select(x => new Cart()
                {
                    CartID = x.CartID,





                    NumberofDays = x.NumberofDays,
                    PricePerday = x.PricePerday,
                    TotalPrice = x.TotalPrice,
                    VehimageName = x.VehimageName,
                    VehimageSrc = String.Format("{0}://{1}{2}/Images2/{3}", Request.Scheme, Request.Host, Request.PathBase, x.VehimageName)

                })

                .ToListAsync();
        }

        // GET: api/Vehicle/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetCart(int id)
        {
            var cart = await _context.Carts.FindAsync(id);

            if (cart == null)
            {
                return NotFound();
            }

            return cart;
        }

        

        // POST: api/Vehicle
    
        [HttpPost]
        public async Task<ActionResult<Cart>> PostCart([FromForm] Cart cart)
        {
            
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Vehicle/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cart>> DeleteCart(int id)
        {
            var cart = await _context.Carts.FindAsync(id);
            if (cart == null)
            {
                return NotFound();
            }
            DeleteImage(cart.VehimageName);
            _context.Carts.Remove(cart);
            await _context.SaveChangesAsync();

            return cart;
        }

        private bool CartExists(int id)
        {
            return _context.Carts.Any(e => e.CartID == id);
        }

        
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images2", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);

        }
    }

}