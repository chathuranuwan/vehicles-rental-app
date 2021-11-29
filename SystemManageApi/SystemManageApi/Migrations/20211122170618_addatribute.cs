using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations
{
    public partial class addatribute : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NumberOfdays",
                table: "Vehicles",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumberOfdays",
                table: "Vehicles");
        }
    }
}
