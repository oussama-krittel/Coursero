using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public int QuestionNum { get; set; }
        public string QuestionText { get; set; }
        public List<string> QuestionOptions { get; set; }
        public string CorrectOption { get; set; }
    }
}
