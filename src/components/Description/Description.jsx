import "./Description.scss"

const Description = () => {
  return (
    <div className="description">
        <h1 className="description__title">BMX Rampage: 2021 Highlights</h1>
        <div className="description__container">
            <div className="description__stats1">
                <p className="description__author">By Red Crow</p>
                <p className="description__date">07/11/2021</p>
            </div>
            <div className="description__stats2">
                <div className="description__views">1,001,023</div>
                <div className="description__likes">110,985</div>
            </div>
        </div>
        <p className="description__synopsis">
            On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, 
            unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before 
            the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event 
            for the second time -- eight years after his first Red Cow Rampage title
        </p>
    </div>
  )
}

export default Description