import React from "react";

const Logo = ({ color }) => {
  const arg = color === "white" ? "text-white" : "text-blue-500";
  return (
    <h1 className={`text-[38px] font-bold p-0 ${arg}`}>
      coursero<span className="text-sm p-0">&copy;</span>
    </h1>
  );
};

export default Logo;
