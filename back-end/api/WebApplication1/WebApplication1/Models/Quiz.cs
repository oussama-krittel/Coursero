using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Quiz
    {
        public int QuizId { get; set; }
        public int QuizNum { get; set; }
        public int QuizScore { get; set; }
        public List<Question> QuestionList { get; set; }
    }
}
