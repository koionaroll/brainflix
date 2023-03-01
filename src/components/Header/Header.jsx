import "./Header.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg"
import profile from "../../assets/images/Mohan-muruge.jpg"

function Header() {

    return (
        <>
            <div className="header">
                <img className="header__logo" src={logo} alt="logo" />
                <div className="header__container">
                    <textarea className="header__search" placeholder="Search"></textarea>
                    <img className="header__profile" src={profile} alt="profile" />
                </div>
                <a className="header__upload" href="../../App.jsx" type= "submit">
                    UPLOAD
                </a>
            </div>
        </>
    )
}

export default Header;