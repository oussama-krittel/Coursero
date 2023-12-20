import axios from "axios";

const url = "http://localhost:49146/";

export const getAllChapitres = () => axios.get(url + "api/chapitre");
export const getAllParagraphes = () => axios.get(url + "api/paragraphe");

export const getQuizByChapitreId = (id) => axios.get(url + "api/chapitre/" + id);
export const getParagrapheByID = (id) => axios.get(url + "quiz/" + id);

export const updateQuizScore = (quizId, newScore) =>
  axios.put(url + "api/quiz/" + quizId, { NewScore: newScore });
  
//read the test component to see how it works
