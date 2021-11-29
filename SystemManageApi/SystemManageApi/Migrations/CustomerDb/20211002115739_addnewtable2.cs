using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations.CustomerDb
{
    public partial class addnewtable2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustomerID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    EmailAddress = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    MobileNumber = table.Column<int>(type: "int", nullable: false),
                    NicNo = table.Column<int>(type: "int", nullable: false),
                    BillingAddress = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    CustomerCity = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PostalCode = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustomerID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
