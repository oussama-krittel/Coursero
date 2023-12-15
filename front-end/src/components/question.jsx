import React from "react";

const Question = () => {
  return (
    <div className="p-3 border border-gray-100 w-full drop-shadow rounded-lg bg-gray-50 flex flex-col gap-2 mb-4">
      <h2 className="text-lg font-semibold">
        Question <span>1</span>
      </h2>
      <h3 className="capitalize">Is react a Java framwork ?</h3>
      <div>
        <input type="radio" name="quest1" value="yes" className="mr-2" />
        <label>Yes</label>
      </div>
      <div>
        <input type="radio" name="quest1" value="no" className="mr-2" />
        <label>No</label>
      </div>
    </div>
  );
};

export default Question;
