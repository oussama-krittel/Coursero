import React from "react";
import Video from "./video";
import Description from "./description";
import Button from "./button";
import { useParams } from "react-router-dom";
import paragraph_rep from "../assets/paragraph-naoufal.json";
const ParagraphePage = () => {
  const { para_id } = useParams();
  const { par_chap_num, video_id, par_num, par_name, par_description } =
    paragraph_rep;
  return (
    <div className="w-full bg-white drop-shadow-lg overflow-y-scroll overflow-x-hidden hideScroll rounded">
      <Video id={video_id} />
      <Description
        number={par_num}
        title={par_name}
        content={par_description}
      />
      <nav className="flex w-full justify-between mt-6 py-3 px-2">
        <Button text="prev" />
        <Button text="next" />
      </nav>
    </div>
  );
};

export default ParagraphePage;
