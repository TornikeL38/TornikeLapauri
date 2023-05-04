import "./header.css"
import Img1 from "./Images/Img1.png"

function Header() {
    return (
        <div className="conteiner">
            <h1 className="textOnPic txtColor">Portfolio Standard</h1>
            <img className="Img1" src={Img1} alt="Portfolio" />
        </div>
    )
}

export default Header