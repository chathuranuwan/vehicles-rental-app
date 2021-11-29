using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SystemManageApi.Models
{
    public class CustomerDetails
    {
        [Key]
        public int CustomerID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string LastName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string EmailAddress { get; set; }

        public int MobileNo { get; set; }

        public int NicNo { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string BillingAddress { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CustomerCity { get; set; }

        public int PostalCode { get; set; }

    }
}
