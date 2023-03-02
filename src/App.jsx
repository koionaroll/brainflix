import './App.scss';
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import Description from "./components/Description/Description"
import Comments from "./components/Comments/Comments"
import NextVideos from "./components/NextVideos/NextVideos"

function App() {
  return (
    <div className="app__margin">
      <Header />
      <VideoPlayer/>
      <div className='app__desktop-layout'>
        <div className='app__desktop-layout--column'>
          <Description/>
          <Comments />
        </div>
        <NextVideos />
      </div>
    </div>
  )
}

export default App;
