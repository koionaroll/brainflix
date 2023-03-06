import "./Comments.scss";
import profile from "../../assets/images/Mohan-muruge.jpg";
import CommentsList from "../CommentsList/CommentsList";

function Comments({commentsInfo}) {
  return (
    <section className="comments">
      <h2 className="comments-counter">{commentsInfo.length} Comments</h2>
      <div className="comments-submit">
        <img className="comments-submit__profile" src={profile} alt="pfp" />
        <div className="comments-submit__wrapper">
          <h3 className="comments-submit__label">JOIN THE CONVERSATION</h3>
          <textarea
            className="comments-submit__textarea"
            placeholder="Add a new comment"
          ></textarea>
          <button className="comments-submit__btn">COMMENT</button>
        </div>
      </div>
      <CommentsList commentsInfo={commentsInfo}  key={commentsInfo.id}/>
    </section>
  );
}

export default Comments;
