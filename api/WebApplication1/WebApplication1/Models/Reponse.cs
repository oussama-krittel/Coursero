using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
	public class Reponse
	{
		public int ReponseId { get; set; }
		public int QuestionId { get; set; }
		public bool IsCorrect { get; set; }
        public string ReponseText { get; set; }


        // Navigation property
        public Question Question { get; set; }
	}
}
