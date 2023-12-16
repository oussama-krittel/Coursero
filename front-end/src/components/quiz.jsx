import React from "react";
import Question from "./question";
import Button from "./button";

const Quiz = ({ acomplished, question_list }) => {
  return (
    <form>
      {question_list.map((question) => (
        <Question key={question.question_id} questObj={question} />
      ))}
      <Button text="Submit" submit />
    </form>
  );
};

export default Quiz;
