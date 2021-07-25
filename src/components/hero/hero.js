import { Carousel } from 'react-bootstrap'
import './hero.css'
import image from './img.png'
import Butt from './button'

const Car = () => {
    return (
        <Carousel fade variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Butt></Butt>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <Butt></Butt>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <Butt></Butt>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    )
}

export default Car;