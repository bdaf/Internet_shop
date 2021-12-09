import { Carousel } from "react-bootstrap";

const CarouselItem = (props) => {
    return (
        <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={props.url}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
    );
}

export default CarouselItem