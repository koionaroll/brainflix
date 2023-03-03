import "./Description.scss"

function Description ({selectedVid}){

  return (
    <div className="description">
        <h1 className="description__title">{selectedVid.title}</h1>
        <div className="description__container">
            <div className="description__stats1">
                <p className="description__author">By {selectedVid.channel}</p>
                <p className="description__date">{selectedVid.timestamp}</p>
            </div>
            <div className="description__stats2">
                <div className="description__views">{selectedVid.views}</div>
                <div className="description__likes">{selectedVid.likes}</div>
            </div>
        </div>
        <p className="description__synopsis">{selectedVid.description}</p>
    </div>
  )
}

export default Description