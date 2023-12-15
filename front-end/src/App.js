import "./App.css";
import Header from "./components/header";
import { SideBar } from "./components/sideBar";
import Main from "./components/mainContent";
import Footer from "./components/footer";
function App() {
  //if slug is false then no chap is choosen
  //then rander the explenation of the course
  // const slug = false;
  return (
    <div>
      <Header />
      <main className="flex  bg-white h-screen w-full">
        <Main />
        <SideBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
