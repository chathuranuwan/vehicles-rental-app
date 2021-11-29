using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace SystemManageApi.Models
{
    public class Cart
    {

        [Key]
        public int CartID { get; set; }

       

       

        public int PricePerday { get; set; }

        public int TotalPrice { get; set; }

        public int NumberofDays { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string VehimageName { get; set; }

        [NotMapped]
        public IFormFile VehimageFile { get; set; }

        [NotMapped]
        public string VehimageSrc { get; set; }

    }
}
