import React from "react";
import Question from "./question";
import Button from "./button";
const Quiz = () => {
  return (
    <form>
      <Question />
      <Button text="Submit" submit />
    </form>
  );
};

export default Quiz;
