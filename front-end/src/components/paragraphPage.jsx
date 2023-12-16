import React from "react";
import Video from "./video";
import Description from "./description";
import Button from "./button";
import { useParams } from "react-router-dom";
const ParagraphePage = () => {
  const { para_id } = useParams();
  return (
    <div className="w-full bg-white drop-shadow-lg overflow-y-scroll overflow-x-hidden hideScroll rounded">
      <Video />
      <Description />
      this is the id of the paragraphe that would be fetched {para_id}
      <nav className="flex w-full justify-between mt-6 py-3 px-2">
        <Button text="prev" />
        <Button text="next" />
      </nav>
    </div>
  );
};

export default ParagraphePage;
