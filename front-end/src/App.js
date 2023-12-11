import "./App.css";
import { useParams } from "react-router-dom";
import Header from "./components/header";
import { Stand } from "./components/stand";
import { SideBar } from "./components/sideBar";
import { Video } from "./components/video";
function App() {
  const { slug } = useParams();
  return (
    <div>
      <Header />
      <main className="flex flex-1 gap-4 max-w-[1460px] my-8 mx-auto ">
        {slug ? <Video lessonSlug={slug} /> : <Stand />}
        <SideBar />
      </main>
    </div>
  );
}

export default App;

{
  /* <div>
      <YouTube videoId={"k5tICunelSU"} opts={opts} />
    </div> */
}
// const opts = {
//   height: '390',
//   width: '640',
//   playerVars: {
//     autoplay: 0,
//   },
// };
