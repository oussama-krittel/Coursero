import React from "react";
import Question from "./question";
import Button from "./button";

const Quiz = ({ acomplished, question_list, score }) => {
  return (
    <div>
      {acomplished ? (
        <div className="bg-blue-100 p-3 rounded text-center text-[30px] uppercase text-gray-600 font-semibold">
          <h1 className="mb-6">you have complited this quiz !!</h1>
          <h2>
            your score is :{" "}
            <span className="text-green-400 font-bold">{score}/100</span>
          </h2>
        </div>
      ) : (
        <form>
          {question_list.map((question) => (
            <Question key={question.question_id} questObj={question} />
          ))}
          <Button text="Submit" submit />
        </form>
      )}
    </div>
  );
};

export default Quiz;
