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
    public class ParagrapheController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ParagrapheController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from paragraphe";

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

        [HttpGet("{id}")]
        public ObjectResult GetById(int id)
        {
            string queryPara = @"SELECT * from paragraphe where paragraphe_id= @id ";

            DataTable tablePar = new DataTable();
            DataTable tableChap = new DataTable();


            string mysqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");

            using (MySqlConnection myCon = new MySqlConnection(mysqlDataSource))
            {
                myCon.Open();

                using (MySqlCommand myCommandPara = new MySqlCommand(queryPara, myCon))
                {

                    myCommandPara.Parameters.AddWithValue("@id", id);

                    using (MySqlDataAdapter myAdapter = new MySqlDataAdapter(myCommandPara))
                    {
                        myAdapter.Fill(tablePar);
                    }
                }

                int chapId = (int)tablePar.Rows[0]["chapitre_id"];
                string queryChap = @"SELECT chapitre_num from chapitre where chapitre_id= @chapId ";


                using (MySqlCommand myCommandChap = new MySqlCommand(queryChap, myCon))
                {

                    myCommandChap.Parameters.AddWithValue("@chapId", chapId);
                    using (MySqlDataAdapter myAdapter = new MySqlDataAdapter(myCommandChap))
                    {
                        myAdapter.Fill(tableChap);
                    }
                }


            }


            var result = new
            {

                par_id = (int)tablePar.Rows[0]["paragraphe_id"],
                par_chap_num = (int)tableChap.Rows[0]["chapitre_num"],
                video_url = tablePar.Rows[0]["video_url"].ToString(),
                par_num = (int)tablePar.Rows[0]["paragraphe_num"],
                par_name = tablePar.Rows[0]["paragraphe_nom"].ToString(),
                par_description = tablePar.Rows[0]["contenu"].ToString(),

            };

            return Ok(result);

        }
    }
}
