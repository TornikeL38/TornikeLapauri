import "./footer.css"
import logo from "./../section img/Logo.png"
import icon from "./../section img/1.png"
import icon2 from "./../section img/2.png"
import icon3 from "./../section img/3.png"
import icon4 from "./../section img/4.png"

export default function Footer() {
    return(
        <footer>
            <div className="leftSide">
                <h2>Contact Us</h2>
                <div>
                    <h4>Email</h4>
                    <p>needhelp@Organia.com</p>
                </div>
                <div>
                    <h4>Phone</h4>
                    <p>123 456 789</p>
                </div>
                <div>
                    <h4>Adress</h4>
                    <p>88 road, borklyn street, USA</p>
                </div>
            </div>
            <div id="forLogo">
                <img src={logo} alt="logo" />
                <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum simply dummy text of the printing 
                </p>
                <div className="divForIcon">
                    <img src={icon} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                </div>
            </div>
            <div className="rightSide">
                <h2>Utility Pages</h2>
                <p>Style Guide </p>
                <p>404 Not Found</p>
                <p>Password Protected</p>
                <p>Licences</p>
                <p>Changelog</p>
            </div>
        </footer>
    )
}