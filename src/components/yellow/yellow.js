import { Container, Button } from "react-bootstrap"
import "./yellow.css"

const Yellow = () => {
    return (
        <Container fluid id="yellow">
            <div id="img-div">
                <h3 id="img2">IMAGE</h3>
                <h3 id="img1">IMAGE</h3>
                <div id="reveal">
                    <h3 id="reveal-txt">REVEAL</h3>
                </div>
            </div>
            <div id="yellow-txt">
                <h3>FRONT ROW SEATS</h3>
                <p>Experience concerts up close and personal.</p>
                <Button id="yellow-demo">SEE DEMO</Button>
            </div>
            <div id="img3-div">
                <h3 >IMAGE</h3>
            </div>
        </Container>
    )
}

export default Yellow