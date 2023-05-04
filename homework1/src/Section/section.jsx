import img1 from "./../section img/Photo (1).png"
import img2 from "./../section img/Photo (2).png"
import img3 from "./../section img/Photo (3).png"
import img4 from "./../section img/Photo (4).png"
import img5 from "./../section img/Photo (5).png"
import img6 from "./../section img/photo (6).png"
import "./section.css"
import img7 from "./../section img/Image (1).png"

function Section() {
    return(
        <div>   
           <div className="conteinerForSection">
                <div>
                    <img src={img1} alt="Lemon" />
                    <h4>Green & Tasty Lemon</h4>
                    <p>Fruits</p>
                </div>
                <div>
                    <img src={img2} alt="Carrot" />
                    <h4>Organic Carrot</h4>
                    <p>Fruits</p>
                </div>
                <div>
                    <img src={img3} alt="Leaf" />
                    <h4>Organic Betel Leaf</h4>
                    <p>Fruits</p>
                </div>
                <div>
                    <img src={img4} alt="Tommto" />
                    <h4>Natural Tommato</h4>
                    <p>Fruits</p>
                </div>
                <div>
                    <img src={img5} alt="Raspberry" />
                    <h4>Black Raspberry</h4>
                    <p>Fruits</p>
                </div>
                <div>
                    <img src={img6} alt="Orange" />
                    <h4>Honey Orange</h4>
                    <p>Fruits</p>
                </div>
            </div>
            <div className="secondConteiner">
                <img src={img7} alt="" />
                <div className="txtOnPic2">
                    <h2>Subscribe to our Newsletter</h2>
                    <input type="text" placeholder="Your Email Address" />
                    <button>Subscribe</button>
                </div>
            </div>
            
        </div>      
    )
}

export default Section