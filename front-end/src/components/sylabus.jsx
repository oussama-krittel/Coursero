import React from "react";
import paragraphs from "../assets/paragraph.json";
import { Link } from "react-router-dom";

export function Sylabus({ chapitre, selected, onSelectedChange }) {
  const filteredParagraphs = (paragraphs.paragraphes || [])
    .filter((paragraphe) => paragraphe.par_chap_num === chapitre.id)
    .sort((a, b) => a.par_num - b.par_num);

  return (
    <div className="cursor-pointer">
      <h1 className="font-bold text-lg">{chapitre.titre}</h1>
      <div className="pl-4">
        {filteredParagraphs.map((paragraphe) => (
          <Link
            to={"/paragraphe/" + paragraphe.par_id}
            key={paragraphe.par_id}
            className={`flex items-center leading-4 hover:bg-slate-100 h-12 rounded-md m-3 w-full ${
              selected === paragraphe.par_id ? "selected" : ""
            }`}
            onClick={() => onSelectedChange(paragraphe.par_id)}
          >
            <span className="bg-blue-500 ml-3 rounded-full w-6 h-6 flex items-center justify-center  text-white mr-1">
              {paragraphe.par_num}
            </span>
            {paragraphe.par_name}
          </Link>
        ))}
        <Link
          to={"/quiz/" + chapitre.id}
          className={`flex items-center leading-4 hover:bg-slate-100 h-12 rounded-md m-3 w-full ${
            selected === chapitre.id + "Q" ? "selected" : ""
          }`}
          onClick={() => onSelectedChange(chapitre.id + "Q")}
        >
          <span className="bg-blue-500 ml-3 rounded-full w-6 h-6 flex items-center justify-center  text-white mr-1">
            ?
          </span>
          Quiz
        </Link>
      </div>
    </div>
  );
}
