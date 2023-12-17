using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChapitreController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ChapitreController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from chapitre";

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


        [HttpGet("{chapitreId}")]
        public JsonResult GetChapitreById(int chapitreId)
        {
            string quizQuery = @"SELECT * FROM quiz WHERE chapitre_id = @ChapitreId";
            string questionsQuery = @"SELECT * FROM questions WHERE question_id = 3 or quiz_id = (select quiz_id from quiz where chapitre_id = @ChapitreId )";
            string reponsesQuery = @"SELECT * FROM reponses WHERE question_id = @QuestionId";

            DataTable quizTable = new DataTable();
            DataTable questionsTable = new DataTable();
            DataTable reponsesTable = new DataTable();
            string mysqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");

            using (MySqlConnection myCon = new MySqlConnection(mysqlDataSource))
            {
                myCon.Open();

                // Retrieve quiz details
                using (MySqlCommand quizCommand = new MySqlCommand(quizQuery, myCon))
                {
                    quizCommand.Parameters.AddWithValue("@ChapitreId", chapitreId);

                    using (MySqlDataAdapter quizAdapter = new MySqlDataAdapter(quizCommand))
                    {
                        quizAdapter.Fill(quizTable);
                    }
                }

                // Retrieve questions associated with the quiz
                using (MySqlCommand questionsCommand = new MySqlCommand(questionsQuery, myCon))
                {
                    questionsCommand.Parameters.AddWithValue("@ChapitreId", chapitreId);

                    using (MySqlDataAdapter questionsAdapter = new MySqlDataAdapter(questionsCommand))
                    {
                        questionsAdapter.Fill(questionsTable);
                    }
                }

                if (quizTable.Rows.Count > 0)
                {
                    // Assuming you have a QuizModel class
                    Quiz quiz = new Quiz
                    {
                        QuizId = int.Parse(quizTable.Rows[0]["quiz_id"].ToString()),
                        QuizNum = int.Parse(quizTable.Rows[0]["quiz_num"].ToString()),
                        QuizScore = int.Parse(quizTable.Rows[0]["quiz_score"].ToString()),
                        QuestionList = new List<Question>()
                    };

                    // Populate the question list
                    foreach (DataRow row in questionsTable.Rows)
                    {
                        int questionId = int.Parse(row["question_id"].ToString());

                        // Retrieve reponses associated with the question
                        using (MySqlCommand reponsesCommand = new MySqlCommand(reponsesQuery, myCon))
                        {
                            reponsesCommand.Parameters.AddWithValue("@QuestionId", questionId);

                            using (MySqlDataAdapter reponsesAdapter = new MySqlDataAdapter(reponsesCommand))
                            {
                                reponsesTable.Clear();
                                reponsesAdapter.Fill(reponsesTable);
                            }
                        }

                        Question question = new Question
                        {
                            QuestionId = questionId,
                            QuestionNum = int.Parse(row["question_num"].ToString()),
                            QuestionText = row["question_text"].ToString(),
                            QuestionOptions = new List<string>()
                        };

                        // Populate the Reponse list for the question
                        foreach (DataRow reponseRow in reponsesTable.Rows)
                        {
                            Reponse reponse = new Reponse
                            {
                                ReponseId = int.Parse(reponseRow["reponse_id"].ToString()),
                                QuestionId = questionId,
                                IsCorrect = bool.Parse(reponseRow["is_correct"].ToString()),
                                ReponseText = reponseRow["reponse_text"].ToString(),
                            };

                            question.QuestionOptions.Add(reponse.ReponseText);
                            if (reponse.IsCorrect) question.CorrectOption = reponse.ReponseText;
                        }

                        quiz.QuestionList.Add(question);
                    }

                    return new JsonResult(quiz);
                }
                else
                {
                    return new JsonResult(new object());
                }
            }
        }
    }
}
