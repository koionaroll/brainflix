import "./NextVideos.scss"

function NextVideos ({nextVid}) {

  
  return (
    <section className="next-videos">
      <h3 className="next-videos__header">NEXT VIDEOS</h3>
      {nextVid.map((element) => { 
        return (
      <div className="next-videos__wrapper">
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