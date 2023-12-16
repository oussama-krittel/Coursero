import "./App.css";
import Header from "./components/header";
import { SideBar } from "./components/sideBar";
import QuizSection from "./components/quizSection";
import Footer from "./components/footer";
import ParagraphePage from "./components/paragraphPage";
import HomePage from "./components/homePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  //if slug is false then no chap is choosen
  //then rander the explenation of the course
  // const slug = false;
  return (
    <Router>
      <Header />
      <main className="flex  bg-white h-screen w-full">
        <div className="w-8/12 m-2">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/paragraphe/:para_id" element={<ParagraphePage />} />
            <Route path="/quiz:quiz_id" element={<QuizSection />} />
          </Routes>
        </div>
        <SideBar />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
