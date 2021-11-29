using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations
{
    public partial class AddVehicledescriptioncolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VehicleType",
                table: "Vehicles");

            migrationBuilder.AddColumn<string>(
                name: "VehicleDescription",
                table: "Vehicles",
                type: "nvarchar(100)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VehicleDescription",
                table: "Vehicles");

            migrationBuilder.AddColumn<string>(
                name: "VehicleType",
                table: "Vehicles",
                type: "nvarchar(50)",
                nullable: true);
        }
    }
}
