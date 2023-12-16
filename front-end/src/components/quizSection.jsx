import React from "react";
import Quiz from "./quiz";
import quiz from "../assets/quiz.json";
import { useParams } from "react-router-dom";
const QuizSection = () => {
  const { quiz_id } = useParams();
  const { quiz_num, acomplished, question_list } = quiz;
  return (
    <main className="w-full p-6 flex gap-4 flex-col max-h-full hideScroll overflow-y-scroll">
      <h1 className="text-[40px] font-bold">
        Quiz <span>{quiz_num}</span>
      </h1>
      <Quiz acomplished={acomplished} question_list={question_list} />
    </main>
  );
};

export default QuizSection;
