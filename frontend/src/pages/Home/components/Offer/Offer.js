
import { Carousel } from 'react-bootstrap';

const Offer = () => {
    return (
        <div  className="d-flex justify-content-md-center">
            <Carousel className="d-block w-100" variant="dark">
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.x-kom.pl/i/img/banners/normal,,x-mas-top_1638345490.jpg?filters=trim"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.x-kom.pl/i/img/banners/normal,,pierwiastek-x-promocja_1638803183.jpg?filters=trim"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.x-kom.pl/i/img/banners/normal,,windows11-huawei-matebook_1638795709.jpg?filters=trim"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Offer;