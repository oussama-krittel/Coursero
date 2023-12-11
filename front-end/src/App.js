import "./App.css";
import Header from "./components/header";
import { SideBar } from "./components/sideBar";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
function App() {
  return (
    <div>
      <Header />
      <main className="flex  bg-slate-500 h-screen w-full" >
        <Main  />
        <SideBar />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
