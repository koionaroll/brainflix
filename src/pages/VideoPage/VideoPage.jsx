import "./VideoPage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";

export const apiUrl = "https://project-2-api.herokuapp.com";
export const apiKey = "25bee686-6e20-459e-adb2-ee05dd754350";

function VideoPage() {
  const [selectedVid, setSelectedVid] = useState({});
  const [nextVid, setNextVid] = useState([]);
  const {vidID} = useParams();

  useEffect(() => {
    getNextVids();
  }, []);

  useEffect(() => {
    if (vidID) {
      getSelectedVids(vidID);
    } else if (nextVid.length) {
      getSelectedVids(selectedVid[0].id);
    }
  }, [vidID, nextVid]);


  function getNextVids() {
    axios
      .get(`${apiUrl}/videos/?api_key=${apiKey}`)
      .then((response) => {
        setNextVid(response.data);
      })
      .catch((err) => { 
        console.log("error: ", err);
      });
  }

  function getSelectedVids(id) {
    axios
      .get(`${apiUrl}/videos/${id}/?api_key=${apiKey}`)
      .then((response) => {
        setSelectedVid(response.data);
      })
      .catch((err) => { 
        console.log("error: ", err);
      });
  }
console.log(selectedVid)
  
  return (
    <>
      <div className="video-page--margin">
        <Header />
      </div>
      <VideoPlayer selectedVid={selectedVid} />
      <div className="video-page--margin">
        <div className="video-page__desktop-layout">
          <div className="video-page__desktop layout--column">
            <Description selectedVid={selectedVid} />
            <Comments commentsInfo={selectedVid} />
          </div>
            <NextVideos
              nextVid={nextVid}
              selectedVid={selectedVid}
            />
        </div>
      </div>
    </>
  );
}

export default VideoPage;
