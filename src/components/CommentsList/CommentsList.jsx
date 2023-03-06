import "./CommentsList.scss";

function CommentsList({ commentsInfo }) {
  return (
    <>
    {/* maps out each element of the array so that they can be targeted accordingly */}
      {commentsInfo.map((element) => (
        <div className="comments-list" key={element.id}>
          <div className="comments-list__profile"></div>
          <div className="comments-list--column">
            <div className="comments-list--row">
              <p className="comments-list__name">{element.name}</p>
              <p className="comments-list__date">
                {new Date(element.timestamp).toLocaleDateString()}
              </p>
            </div>
            <p className="comments-list__content">{element.comment}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CommentsList;
