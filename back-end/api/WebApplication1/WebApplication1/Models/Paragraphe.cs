using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Paragraphe
    {
        public int ParagrapheId { get; set; }
        public int ChapitreId { get; set; }
        public string Contenu { get; set; }
        public string VideoUrl { get; set; }

        // Navigation property
        public Chapitre Chapitre { get; set; }
    }
}
