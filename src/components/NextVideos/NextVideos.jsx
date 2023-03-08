import "./NextVideos.scss";
import { Link } from "react-router-dom";


function NextVideos({ nextVid, selectedVid }){
    return (
    <section className="next-videos">
      <h3 className="next-videos__header">NEXT VIDEOS</h3>
      {nextVid
      //filters out a selected vid from displaying and maps the remaining elements in the array
        .filter((element) => element.id !== selectedVid.id)
        .map((element) => {
          return (
            <Link to={`/${element.id}`}
              className="next-videos__wrapper"
              key={element.id}
            >
              <img className="next-videos__thumbnail" src={element.image} />
              <div className="next-videos__wrapper--column">
                <div className="next-videos__title">{element.title}</div>
                <div className="next-videos__author">{element.channel}</div>
              </div>
            </Link>
          );
        })}
    </section>
  );
}

export default NextVideos;
