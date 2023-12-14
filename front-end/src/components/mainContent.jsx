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
        <main className="w-3/4 p-2">
          <Video />
          <Description />
          <nav className="flex w-full justify-between mt-6 py-3">
            <Button text="prev" />
            <Button text="next" />
          </nav>
        </main>
      ) : (
        <CourseDescription />
      )}
    </>
  );
};

export default Main;
