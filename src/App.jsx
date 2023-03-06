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
  //declare selectedVid from detailed video dataset and useState i[0] since we want to start with the first video
  const [selectedVid, setSelectedVid] = useState(videoData[0]);
  //declare nextVid from video list dataset and we want to use it in it's entirety
  const [nextVid, setNextVid] = useState(vidList);

  //sets the newSelectedVid to i[0] and passes each unique id to it's video element
  const handleNextVidClick = (id) => {
    const newSelectedVid = videoData.filter((vid) => vid.id === id);
    setSelectedVid(newSelectedVid[0]);
  };

  return (
    <>
      {/* 2 classes for page margin since the video player's margin behaves differently compared to the rest of the page*/}
      <div className="app--margin">
        <Header />
      </div>
      <VideoPlayer selectedVid={selectedVid} />
      <div className="app--margin">
        {/*  */}
        <div className="app__desktop-layout">
          <div className="app__desktop-layout--column">
            <Description selectedVid={selectedVid} />
            {/* changed name of selectedVid.comments to commentsInfo since this is what this is referring to in the dataset */}
            <Comments commentsInfo={selectedVid.comments} />
          </div>
          <NextVideos
            nextVid={nextVid}
            handleNextVidClick={handleNextVidClick}
            selectedVid={selectedVid}
          />
        </div>
      </div>
    </>
  );
}

export default App;
