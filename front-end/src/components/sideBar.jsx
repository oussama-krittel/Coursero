import React, { useState } from "react";
import chapitres from "../assets/chapitres.json";
import { Sylabus } from "./sylabus";
import { Link } from "react-router-dom";

export function SideBar() {
  const [selectedParagraph, setSelectedParagraph] = useState(null);
  const handleSelectedParagraph = (selectedKey) => {
    setSelectedParagraph(selectedKey);
  };
  return (
    <Link
      // add the id of the paragraph in the place of 20
      // if it's a quiz go to /quiz/id
      to={"/paragraphe/20"}
      className="w-4/12 bg-white drop-shadow-lg m-2 overflow-y-scroll overflow-x-hidden hideScroll p-2 rounded-md"
    >
      {chapitres.chapitres.map((chapitre) => (
        <Sylabus
          key={chapitre.id}
          chapitre={chapitre}
          selected={selectedParagraph}
          onSelectedChange={handleSelectedParagraph}
        />
      ))}
    </Link>
  );
}
