import "./NextVideos.scss"

const NextVideos = () => {

  return (
    <section className="next-videos">
      <h3 className="next-videos__header">NEXT VIDEOS</h3>
      <div className="next-videos__wrapper">
        <div className="next-videos__thumbnail"></div>
        <div className="next-videos__wrapper--column">
          <div className="next-videos__title">Become A Travel Pro In One Easy Lesson</div>
          <div className="next-videos__author">Todd Welch</div>
        </div>
      </div>
      <div className="next-videos__wrapper">
        <div className="next-videos__thumbnail"></div>
        <div className="next-videos__wrapper--column">
          <div className="next-videos__title">Become A Travel Pro In One Easy Lesson</div>
          <div className="next-videos__author">Todd Welch</div>
        </div>
      </div>
    </section>
  )
}

export default NextVideos