import React from "react";
import card1 from './assets/1.png'
import card2 from './assets/2.png'
import card3 from './assets/3.png'
import card4 from './assets/4.png'
import '../components/css/whoiam.css'

const WhoIAm = () => {



    return (
        <div className="who-i-am">
            <div>
                <h1 className="h1Who">Who I am</h1>
                <p className="pWho">Hi my name is Lorenzo and I am a quant. After studying Law and Finance at Argentina, I found out in programming my passion to bring into a reality my imagination. End up being a developer that grabs a necessity and see it as a opportunity to solve it.
                </p>
                <p className="pWho">When I design my code I keep in mind some standards: </p>
            </div>
            <div className="divCards">
                <img src={card1} alt="" />
                <img src={card2} alt="" />
                <img src={card3} alt="" />
                <img src={card4} alt="" />
            </div>
            <div className="divFooter">
                <div className="footerWho">
                    <p className="pFooterWho">These standards do not only define the quality of my code, but also define me as a programmer.</p>
                </div>
            </div>
        </div>
    )
}

export default WhoIAm;