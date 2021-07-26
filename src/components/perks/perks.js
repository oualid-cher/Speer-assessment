import { Container } from "react-bootstrap"
import "./perks.css"

const Perks = () => {
    return (
        <Container fluid id="perk">
            <div id="perk-t">
                <h1>PERKS</h1>
            </div>
            <div id="perk-cont">
                <div className="perk-p-c">
                    <div id="line1"></div>
                    <h3 id="perk-title1">Subscription Payement Model</h3>
                    <p className="perk-para">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>

                <div className="perk-p-c">
                    <div id="line2"></div>
                    <h3 id="perk-title2">No Fee Cancelation Policy</h3>
                    <p className="perk-para">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div className="perk-p-c">
                    <div id="line3"></div>
                    <h3 id="perk-title3">Subscription Payment Model</h3>
                    <p className="perk-para">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
            </div>
        </Container >
    )
}

export default Perks