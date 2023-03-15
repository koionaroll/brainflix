import "./UploadForm.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const apiUrl = "http://localhost:8080";

function UploadForm() {
  const navigate = useNavigate();

  const [upload, setUpload] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`${apiUrl}`).then((res) => {
      setUpload(res.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = formRef.current;
    axios
      .post(`${apiUrl}/UploadPage`, {
        title: title.value,
        description: description.value,
      })
      .then(()=>{
       setTimeout(() => {
        navigate("/")
       }, 250);
      })
      .catch((err) => {
        console.log(err);
      });

    event.target.reset();
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
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
                id="title"
                className="upload-form__textarea--title"
                placeholder="Add a title to your video"
              ></textarea>
            </div>
            <div>
              <h3 className="upload-form__label">ADD A VIDEO DESCRIPTION</h3>
              <textarea
                id="description"
                className="upload-form__textarea--description"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="upload-form__btn--container">
          <button
            className="upload-form__btn-publish"
          >
            PUBLISH
          </button>
          <Link to="/" className="upload-form__btn-cancel">
            CANCEL
          </Link>
        </div>
      </form>
    </>
  );
}

export default UploadForm;
