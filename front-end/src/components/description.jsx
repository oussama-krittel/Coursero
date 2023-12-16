import React from "react";

const Description = () => {
  return (
    <section className="mt-4 px-2">
      <h1 className=" flex flex-wrap items-baseline ">
        <span className="font-bold uppercase text-gray-800 mr-6 text-[30px]">
          Paragraphe 1 :
        </span>
        <span className="capitalize text-gray-500 text-[25px]">
          le nom de paragraphe
        </span>
      </h1>
      <p>
        Filler text is text that shares some characteristics of a real written
        text, but is random or otherwise generated. It may be used to display a
        sample of fonts, generate text for testing, or to spoof an e-mail spam
        filter.
      </p>
    </section>
  );
};

export default Description;
