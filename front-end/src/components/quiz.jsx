import React, { useState, useRef } from "react";
import Question from "./question";
import Button from "./button";
import Certificat from "./Certificat";

const Quiz = ({ acomplished, question_list, score }) => {
  const [showPDF, setShowPDF] = useState(false);
  const [TypedName, setTypedName] = useState();
  const inputRef = useRef(null);

  const handleClick = () => {
    setShowPDF(!showPDF);
    setTypedName(inputRef.current.value);
  };

  return (
    <div>
      {acomplished ? (
        <>
          <div className="bg-blue-100 p-3 rounded text-center text-[30px] uppercase text-gray-600 font-semibold">
            <h1 className="mb-6">you have completed this quiz !!</h1>
            <h2>
              your score is :{" "}
              <span className="text-green-400 font-bold">{score}/100</span>
            </h2>

            <input type="text" ref={inputRef} placeholder="Enter full name" />
            <button
              type="button"
              className="bg-blue-400 py-1 px-8 text-white capitalize font-semibold rounded-md h-30 border border-white
            hover:bg-white hover:border-blue-400 hover:text-blue-400 hover:drop-shadow-lg "
              onClick={handleClick}
            >
              View Certificate
            </button>
          </div>

          {showPDF && <Certificat name={TypedName} score={score} />}
        </>
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
