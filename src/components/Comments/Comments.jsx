import "./Comments.scss"
import profile from "../../assets/images/Mohan-muruge.jpg"


const Comments = () => {
    let numOfComments = 3
    // let commentContent = ""
    // let commentName = ""
    // let commentDate = ""
    // let commentProfile = ""
    // let newComment = ""

    
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
        <div className="comments-list">
            <div className="comments-list__profile"></div>
            <div className="comments-list--column">
                <div className="comments-list--row">
                    <p className="comments-list__name">Micheal Lyons</p>
                    <p className="comments-list__date">08/09/2021</p>
                </div>
                <p className="comments-list__content">They BLEW the ROOF off 
                at their last event, once everyone started figuring out they 
                were going. This is still simply the greatest opening of an 
                event I have EVER witnessed.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Comments