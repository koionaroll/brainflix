import "./UploadForm.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

function UploadForm() {
  return (
    <>
      <h1 className="upload-form__title">Upload Video</h1>
      <div>
        <h3 className="upload-form__label">VIDEO THUMBNAIL</h3>
        <img
          className="upload-form__thumbnail"
          src={thumbnail}
          alt="thumbnail"
        />
      </div>
      <div>
        <h3 className="upload-form__label">TITLE YOUR VIDEO</h3>
        <textarea
          className="upload-form__textarea--title"
          placeholder="Add a title to your video"
        ></textarea>
        <h3 className="upload-form__label">ADD A VIDEO DESCRIPTION</h3>
        <textarea
          className="upload-form__textarea--description"
          placeholder="Add a description to your video"
        ></textarea>
      </div>
      <div>
        <button className="upload-form__btn-publish">PUBLISH</button>
        <button className="upload-form__btn-cancel">CANCEL</button>
      </div>
    </>
  );
}

export default UploadForm;
