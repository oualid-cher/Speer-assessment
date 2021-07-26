import { Carousel } from 'react-bootstrap'
import './hero.css'
import image1 from './img1.png'
import image2 from './img2.png'
import image3 from './img3.png'
import Butt from './button'

const Car = () => {
    return (
        <Carousel fade variant="dark">
            <Carousel.Item>
                <img
                    style={{ height: "100vh" }}
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Butt></Butt>
                    <h3>INTERACTIVE CONCERT EXPERIENCE</h3>
                    <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "100vh" }}
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <Butt></Butt>
                    <h3>INTERACTIVE CONCERT EXPERIENCE</h3>
                    <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "100vh" }}
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <Butt></Butt>
                    <h3>INTERACTIVE CONCERT EXPERIENCE</h3>
                    <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    )
}

export default Car;