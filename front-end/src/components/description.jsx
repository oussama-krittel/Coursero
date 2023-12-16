import React from "react";

const Description = ({ number, title, content }) => {
  return (
    <section className="mt-4 px-2">
      <h1 className=" flex flex-wrap items-baseline ">
        <span className="font-bold uppercase text-gray-800 mr-6 text-[30px]">
          Paragraphe {number} :
        </span>
        <span className="capitalize text-gray-500 text-[25px]">{title}</span>
      </h1>
      <p>{content}</p>
    </section>
  );
};

export default Description;
