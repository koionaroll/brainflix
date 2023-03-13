import "./VideoPage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";

export const apiUrl = "https://project-2-api.herokuapp.com";
export const apiKey = "25bee686-6e20-459e-adb2-ee05dd754350";

function VideoPage() {
  const [selectedVid, setSelectedVid] = useState({});
  const [nextVid, setNextVid] = useState([]);
  const { vidID } = useParams();

  useEffect(() => {
    getNextVids();
  }, []);

  useEffect(() => {
    if (vidID) {
      getSelectedVids(vidID);
    } else if (nextVid.length) { 
      getSelectedVids(nextVid[0].id);
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
      .then((res) => {
        setSelectedVid(res.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }
  return (
    <>
      <div className="video-page--margin">
        <PageHeader />
      </div>
      <VideoPlayer selectedVid={selectedVid} />
      <div className="video-page--margin">
        <div className="video-page__desktop-layout">
          <div className="video-page__desktop layout--column">
            <Description selectedVid={selectedVid} />
            <Comments commentsInfo={selectedVid.comments} />
          </div>
          <NextVideos selectedVid={selectedVid} nextVid={nextVid}/>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
