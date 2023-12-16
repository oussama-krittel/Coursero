import React from "react";

const Question = ({ questObj }) => {
  const { question_num, question_text, question_options, correct_option } =
    questObj;
  return (
    <div className="p-3 border border-gray-100 w-full drop-shadow rounded-lg bg-gray-50 flex flex-col gap-2 mb-4">
      <h2 className="text-lg font-semibold">
        Question <span>{question_num}</span>
      </h2>
      <h3 className="capitalize">{question_text}</h3>
      {question_options.map((quest) => (
        <div>
          <input
            type="radio"
            name={`quest${question_num}`}
            value={quest}
            className="mr-2"
          />
          <label>{quest}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
