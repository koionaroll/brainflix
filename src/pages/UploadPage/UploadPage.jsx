import Header from "../../components/Header/Header";
import UploadForm from "../../components/UploadForm/UploadForm";
import "./UploadPage.scss";

function UploadPage() {
  return (
    <>
      <div className="header-spacer">
        <div className="upload-page--margin">
          <Header />
        </div>
      </div>
      <div className="upload-page--margin">
        <UploadForm/>
      </div>
    </>
  );
}

export default UploadPage;
