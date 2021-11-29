using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations.CustomerDb
{
    public partial class newcolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NumberOfday",
                table: "Customers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalPrice",
                table: "Customers",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumberOfday",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "TotalPrice",
                table: "Customers");
        }
    }
}
