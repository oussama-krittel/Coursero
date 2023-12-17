using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using WebApplication1.Models;
using System;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public QuizController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from quiz";

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

        [HttpPut("{quizId}")]
        public JsonResult UpdateQuizScore(int quizId, [FromBody] QuizUpdateModel quiz)
        {
            if (quiz == null)
            {
                return new JsonResult(new { Error = "Invalid JSON payload" }) { StatusCode = 400 };
            }

            string updateQuery = "UPDATE quiz SET quiz_score = @NewScore WHERE quiz_id = @QuizId";

            string mysqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");

            using (MySqlConnection myCon = new MySqlConnection(mysqlDataSource))
            {
                myCon.Open();

                using (MySqlCommand myCommand = new MySqlCommand(updateQuery, myCon))
                {
                    myCommand.Parameters.AddWithValue("@QuizId", quizId);
                    myCommand.Parameters.AddWithValue("@NewScore", quiz.NewScore);

                    try
                    {
                        int rowsAffected = myCommand.ExecuteNonQuery();

                        if (rowsAffected > 0)
                        {
                            var result = new
                            {
                                Message = "Quiz score updated successfully",
                                QuizId = quizId,
                                Score = quiz.NewScore,
                            };  

                            return new JsonResult(result);
                        }
                        else
                        {
                            return new JsonResult(new { Error = "Quiz not found" }) { StatusCode = 404 };
                        }
                    }
                    catch (Exception ex)
                    {
                        // Handle exception, log, or return an appropriate error response
                        return new JsonResult(new { Error = "Internal Server Error" }) { StatusCode = 500 };
                    }
                }
            }
        }
    }
}
