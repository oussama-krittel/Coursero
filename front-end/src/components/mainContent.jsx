import React from "react";
import Video from "./video";
import Description from "./description";
import Button from "./button";
import CourseDescription from "./courseDescription";
const Main = () => {
  //to show the chapter infos if true and the course desc if not
  const slug = true;

  return (
    <>
      {slug ? (
        <div className="w-8/12 bg-white drop-shadow-lg m-2 overflow-y-scroll overflow-x-hidden hideScroll rounded">
          <Video />
          <Description />
          <nav className="flex w-full justify-between mt-6 py-3">
            <Button text="prev" />
            <Button text="next" />
          </nav>
        </div>
      ) : (
        <CourseDescription />
      )}
    </>
  );
};

export default Main;
