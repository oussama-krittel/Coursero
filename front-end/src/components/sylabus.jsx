import React from "react";
import paragraphs from "../assets/paragraph.json";

export function Sylabus({ chapitre }) {
  const filteredParagraphs = (paragraphs.paragraphes || [])
    .filter((paragraphe) => paragraphe.chapitreid === chapitre.id)
    .sort((a, b) => a.numero - b.numero);

  return (
    <div className="">
      <h1 className="font-bold text-lg">{chapitre.titre}</h1>
      <div className="pl-4">
        {filteredParagraphs.map((paragraphe) => (
          <div
            key={paragraphe.id}
            className="flex items-center leading-4 hover:bg-white h-12 rounded-md m-3 w-full"
          >
            <span className="bg-blue-500 ml-3 rounded-full w-6 h-6 flex items-center justify-center  text-white mr-1">
              {paragraphe.numero}
            </span>
            {paragraphe.titre}
          </div>
        ))}
        <div className="flex items-center leading-4 hover:bg-white h-12 rounded-md m-3 w-full">
          <span className="bg-blue-500 ml-3 rounded-full w-6 h-6 flex items-center justify-center  text-white mr-1">
            ?
          </span>
          Quiz
        </div>
      </div>
    </div>
  );
}