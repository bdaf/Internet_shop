import { Carousel, } from 'react-bootstrap';

import test from '../../../pages/Home/components/Product/Monitor.jpg'
import CarouselItem from './CarouselItem';


const Carousels = (props) => {
    return (
        <Carousel className="w-100" variant="dark">
            {props.photos.map((photo) => <CarouselItem url={photo.url} />)}

        </Carousel>
    );
}

export default Carousels
