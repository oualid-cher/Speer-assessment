import { Container, Button, Row, Col } from "react-bootstrap";
import speaker1 from "./speaker1.png"
import speaker from "./speakers.png"
import Player from "./song";
import song from "./song.mp3"
import './red.css'

const Red = () => {
    return (
        <Container fluid id="red">
            <Row>
                <Col lg={true}>
                    <h3>SUPERIOR SOUND</h3>
                    <p>Experience live versions of your favourite songs</p>
                    <Button id="red-demo">SEE DEMO</Button>
                </Col>
                <Col lg={true} id="img-speaker">
                    <img src={speaker1} alt="spearkers" className="speakers" id="speaker-first" />
                    <img src={speaker} alt="spearkers" className="speakers" />
                    <Player url={song} id="red-button"></Player>
                </Col>
            </Row>
        </Container>
    )
}

export default Red;