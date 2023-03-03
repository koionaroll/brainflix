import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Description from "./components/Description/Description";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";

import videoData from "./data/video-details.json";
import vidList from "./data/videos.json";

function App() {
  const [selectedVid, setSelectedVid] = useState(videoData[0]);
  const [nextVid, setNextVid] = useState(vidList)

  const handleNextVidClick = (id) => {
      const newSelectedVid = videoData.filter((vid) => vid.id === id)
      setSelectedVid(newSelectedVid[0])
  }

  return (
    <>
      <div className="app--margin">
      <Header />
      </div>
      <VideoPlayer selectedVid={selectedVid} />
      <div className="app--margin">
        <div className="app__desktop-layout">
          <div className="app__desktop-layout--column">
            <Description selectedVid={selectedVid} />
            <Comments selectedVid={selectedVid.comments}/>
          </div>
          <NextVideos 
          nextVid={nextVid} 
          handleNextVidClick = {handleNextVidClick} 
          selectedVid={selectedVid} 
          />
        </div>
      </div>
    </>
  );
}

export default App;
