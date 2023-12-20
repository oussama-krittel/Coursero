import React, { useState } from "react";
import { getAllChapitres, updateQuizScore } from "./api";

const TestComponent = () => {
  const [chapitres, setChapitres] = useState([]);
  const [quizIdToUpdate, setQuizIdToUpdate] = useState(1);
  const [newScore, setNewScore] = useState(100);
  const [updateResult, setUpdateResult] = useState("");

  const handleFetchChapitres = () => {
    getAllChapitres()
      .then((response) => {
        setChapitres(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chapitres:", error);
      });
  };

  const handleUpdateQuizScore = () => {
    updateQuizScore(quizIdToUpdate, newScore)
      .then(() => {
        setUpdateResult("Quiz score updated successfully");
      })
      .catch((error) => {
        setUpdateResult(`Error updating quiz score: ${error.message}`);
      });
  };

  return (
    <div>
      <h2>API Test Component</h2>
      <button onClick={handleFetchChapitres}>Fetch Chapitres</button>
      <br />
      <pre>{JSON.stringify(chapitres, null, 2)}</pre>
      
      <h2>Update Quiz Score:</h2>
      <label>
        Quiz ID:
        <input
          type="number"
          value={quizIdToUpdate}
          onChange={(e) => setQuizIdToUpdate(e.target.value)}
        />
      </label>
      <br />
      <label>
        New Score:
        <input
          type="number"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleUpdateQuizScore}>Update Score</button>
      <p>{updateResult}</p>
    </div>
  );
};

export default TestComponent;
