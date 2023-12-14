import React from "react";

const Button = (props) => {
  const { text, submit } = props;
  return (
    <button
      className="bg-blue-400 py-2 px-8 text-white capitalize font-semibold rounded-md h-50 border border-white
    hover:bg-white hover:border-blue-400 hover:text-blue-400 hover:drop-shadow-lg "
      type={submit ? "submit" : "button"}
    >
      {text}
    </button>
  );
};

export default Button;
