import "./PageHeader.scss"
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/BrainFlix-logo.svg"
import profile from "../../assets/images/Mohan-muruge.jpg"

function PageHeader() {
    return (
        <div className="header">
            <NavLink to="/"><img className="header__logo" src={logo} alt="logo"/></NavLink>
            <div className="header__container">
                <textarea className="header__container__search" placeholder="Search"></textarea>
                <img className="header__container__profile" src={profile} alt="profile" />
                <NavLink to="/UploadPage" className="header__container__upload" >UPLOAD</NavLink>
            </div>
        </div>
    )
}

export default PageHeader;