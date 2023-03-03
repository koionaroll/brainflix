import "./Comments.scss"
import profile from "../../assets/images/Mohan-muruge.jpg"


function Comments ({selectedVid}){
    let numOfComments = 3
    const commentsInfo = selectedVid

    function formatDate(date){
       let newDate =  new Date(date)
        return newDate.toLocaleDateString()
    }

  return (
    <section className="comments">
        <h2 className="comments-counter">{numOfComments} Comments</h2>
        <div className="comments-submit">
            <img className="comments-submit__profile" src={profile} alt="pfp"/>
            <div className="comments-submit__wrapper">  
                <h3 className="comments-submit__label">JOIN THE CONVERSATION</h3>
                <textarea className="comments-submit__textarea" placeholder="Add a new comment"></textarea>
                <button className="comments-submit__btn">COMMENT</button>
            </div>
        </div>
        {commentsInfo.map((element) => { 
        return (
        <div className="comments-list">
            <div className="comments-list__profile"></div>
            <div className="comments-list--column">
                <div className="comments-list--row">
                    <p className="comments-list__name">{element.name}</p>
                    <p className="comments-list__date">{new Date (element.timestamp).toLocaleDateString()}</p>
                </div>
                <p className="comments-list__content">{element.comment}</p>
            </div>
        </div>
            )
        })}
    </section>
  )
}

export default Comments