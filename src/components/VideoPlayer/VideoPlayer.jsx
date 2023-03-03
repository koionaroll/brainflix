import "./VideoPlayer.scss";

function VideoPlayer({ selectedVid }) {
  return (
    <>
      <div className="video-player__container">
        <video controls className="video-player">
          <source src={selectedVid.id}/>
        </video>
      </div>
    </>
  );
}

export default VideoPlayer;
