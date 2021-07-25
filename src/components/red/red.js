import { Container } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import speaker1 from "./speaker1.png"
import speaker from "./speakers.png"
import Player from "./song";
import song from "./song.mp3"
import './red.css'

const Red = () => {
    return (
        <Container fluid id="red">
            <h3>SUPERIOR SOUND</h3>
            <p>Experience live versions of your favourite songs</p>
            <div id="img-speaker">
                <img src={speaker1} alt="spearkers" className="speakers" id="speaker-first" />
                <img src={speaker} alt="spearkers" className="speakers" />
                {/* <Button id="red-button">CLICK</Button> */}
                <Player url={song} id="red-button"></Player>
            </div>
        </Container>
    )
}

export default Red;