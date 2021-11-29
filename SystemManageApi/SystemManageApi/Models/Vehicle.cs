using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace SystemManageApi.Models
{
    public class Vehicle
    {
        [Key]
        public int VehicleID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string VehicleCategory { get; set; } 

        [Column(TypeName = "nvarchar(50)")]
        public string VehicleBrand { get; set; }

        public int NumberOfSeats { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string VehicleDescription { get; set; }

        public int ChargePerDay { get; set; }


        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }
    }
}
