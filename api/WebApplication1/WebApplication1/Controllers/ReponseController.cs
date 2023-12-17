using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReponseController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ReponseController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from reponses";

            DataTable table = new DataTable();
            string mysqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");

            using (MySqlConnection myCon = new MySqlConnection(mysqlDataSource))
            {
                myCon.Open();

                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    using (MySqlDataAdapter myAdapter = new MySqlDataAdapter(myCommand))
                    {
                        myAdapter.Fill(table);
                    }
                }
            }

            return new JsonResult(table);
        }
    }
}
