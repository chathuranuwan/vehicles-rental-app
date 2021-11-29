using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations.CustomerDb
{
    public partial class imagenewcolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "VeimageName",
                table: "Customers",
                type: "nvarchar(100)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VeimageName",
                table: "Customers");
        }
    }
}
