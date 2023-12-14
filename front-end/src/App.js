import "./App.css";
import Footer from "./components/footer";

import Header from "./components/header";
import Main from "./components/mainContent";
import QuizSection from "./components/quizSection";
function App() {
  //if slug is false then no chap is choosen
  //then rander the explenation of the course
  const slug = false;
  return (
    <div>
      <Header />
      <div className="flex justify-between w-full ">
        <Main />

        {
          // <QuizSection />
        }
        <div id="sidebar" className="bg-red-200 w-1/4">
          this is the sidebar
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
