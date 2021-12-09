import { Carousel, } from 'react-bootstrap';

const Carousels = (props) => {
    return (
        <Carousel className="w-100" variant="dark">
            {props.photos[0] && <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    height={500}
                    src={props.photos[0].url}
                    alt="First slide"
                />
            </Carousel.Item>}
            {props.photos[1] && <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    height={500}
                    src={props.photos[1].url}
                    alt="First slide"
                />
            </Carousel.Item>}
        </Carousel>
    );
}

export default Carousels
