import "./VideoPlayer.scss";

function VideoPlayer({ selectedVid }) {
  return (
    <>
      <div className="video-player__container">
        <video className="video-player" poster={selectedVid.image} controls>
          <source
            src={selectedVid.video + "?api_key='khoitran'"}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default VideoPlayer;
