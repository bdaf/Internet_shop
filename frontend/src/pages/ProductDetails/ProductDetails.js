import { Col, Row, Stack, Button } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";
import Carousels from "../../components/UI/Carousel/Carousel";

const ProductDetails = (props) => {
    return (
        <>
            <Navbar />
            <div className="m-4">
                <Row>
                    <Col xs={12} md={5}>
                        <Carousels />
                    </Col>
                    <Col xs={12} md={7}>
                        <h1>Nazwa produktu</h1>
                        <p>Producent: Dell</p>
                        <hr />
                        <Row>
                            <Col xs={12} md={6}>
                                <p>Kategoria: Monitory</p>
                                <p>Niezależnie od tego, czy korzystasz z monitora w domu, czy w biurze, warto zadbać o komfort oczu. Ekran Dell P2422H nie tylko zapewnia wystarczającą przestrzeń roboczą do wygodnej pracy, ale też posiada wysoką rozdzielczość. W efekcie rewelacyjnie sprawdzi się zarówno podczas wpisywania danych w programach, jak i podczas oglądania filmów. Co więcej, nowoczesna konstrukcja urządzenia stanowi eleganckie uzupełnienie każdego miejsca pracy.</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <Stack gap={3}>
                                    <div className="ms-auto">999.99 PLN</div>
                                    <Button variant="outline-danger">Dodaj do koszyka</Button>
                                </Stack>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default ProductDetails