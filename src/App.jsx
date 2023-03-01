import './App.scss';
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import Description from "./components/Description/Description"
import Comments from "./components/Comments/Comments"

function App() {
  return (
    <>
    <Header />
    <VideoPlayer/>
    <Description/>
    <Comments />
    </>
  )
}

export default App;
