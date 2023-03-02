import './App.scss';
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import Description from "./components/Description/Description"
import Comments from "./components/Comments/Comments"
import NextVideos from "./components/NextVideos/NextVideos"

function App() {
  return (
    <>
    <Header />
    <VideoPlayer/>
    <Description/>
    <Comments />
    <NextVideos />
    </>
  )
}

export default App;
