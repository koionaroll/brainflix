import "./NextVideos.scss"

function NextVideos (
  {nextVid, 
  handleNextVidClick, 
  selectedVid}
  ){

  return (
    <section className="next-videos">
      <h3 className="next-videos__header">NEXT VIDEOS</h3>
      {nextVid
      .filter((element) => element.id !== selectedVid.id)
      .map((element) => { 
        return (
      <div className="next-videos__wrapper" key={element.id} onClick={() => {handleNextVidClick(element.id)}}>
        <img className="next-videos__thumbnail" src ={element.image} />
        <div className="next-videos__wrapper--column">
          <div className="next-videos__title">{element.title}</div>
          <div className="next-videos__author">{element.channel}</div>
        </div>
      </div>
      )})} 
    </section>
)}

export default NextVideos