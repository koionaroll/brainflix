import "./UploadForm.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { Link, Navigate } from "react-router-dom";

function UploadForm() {
  return (
    <>
      <h1 className="upload-form__title">Upload Video</h1>
      <div className="upload-form__desktop-layout--row">
        <div>
          <h3 className="upload-form__label">VIDEO THUMBNAIL</h3>
          <img
            className="upload-form__thumbnail"
            src={thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="upload-form__textarea--container">
          <div>
            <h3 className="upload-form__label">TITLE YOUR VIDEO</h3>
            <textarea
              className="upload-form__textarea--title"
              placeholder="Add a title to your video"
            ></textarea>
          </div>
          <div>
            <h3 className="upload-form__label">ADD A VIDEO DESCRIPTION</h3>
            <textarea
              className="upload-form__textarea--description"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="upload-form__btn--container">
        <Link to="/" className="upload-form__btn-publish">PUBLISH</Link>
        <Link to="/" className="upload-form__btn-cancel">CANCEL</Link>
      </div>
    </>
  );
}

export default UploadForm;
