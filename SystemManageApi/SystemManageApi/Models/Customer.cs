using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SystemManageApi.Models
{
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string LastName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string EmailAddress { get; set; }

        public int MobileNumber { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string NicNo { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string BillingAddress { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CustomerCity { get; set; }

        public int PostalCode { get; set; }

        public int NumberOfday { get; set; }

        public int TotalPrice { get; set; }


        [NotMapped]
        public IFormFile VeimageFile { get; set; }

        [NotMapped]

        public string VeimageSrc { get; set; }

   
        [Column(TypeName = "nvarchar(100)")]
        public string VeimageName { get; set; }

       


    }
}
