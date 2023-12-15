import React from "react";
import Quiz from "./quiz";

const QuizSection = () => {
  return (
    <main className="w-full p-6 flex gap-4 flex-col">
      <h1 className="text-[40px] font-bold">
        Quiz <span>1</span>
      </h1>
      <Quiz />
    </main>
  );
};

export default QuizSection;
