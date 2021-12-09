import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CartContext from "../../store/cart-context";
import absencePhoto from '../Home/components/Product/absencePhoto.svg'
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext)

  return (
    <div class="card mb-3">
      <div class="card-body">
        <Row class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <Col xs={2}>
              <img
                src={props.product.gallery.length > 0 ? props.product.gallery[0].url : absencePhoto}
                class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
            </Col>
            <Col xs={2}>
              <h5 className="text-center">{props.product.name}</h5>
            </Col>
            <Col xs={3}>
              <h6 className="text-center">Ilość</h6>
              <p class="d-flex justify-content-center small mb-0">
                <Button onClick={() => cartCtx.removeItem(props.product.productId)} className="me-1" variant="light">-</Button>
                <span style={{ fontSize: "20px" }}> {props.product.amount} </span>
                <Button onClick={() => cartCtx.addItem(props.product)} className="ms-1" variant="light">+</Button>
              </p>
            </Col>
            <Col xs={3} class="d-flex flex-row align-items-center">
              <div style={{ width: '120px' }}>
                <h6 class="mb-0 ">{props.product.price.toFixed(2)} PLN</h6>
              </div>
            </Col>
            <Col xs={2}>
              <a style={{ color: '#cecece' }}><i class="fas fa-trash-alt"></i>Usuń</a>
            </Col>
          </div>
        </Row>
      </div>
    </div>

  );
};

export default function Store() {
  const cartCtx = useContext(CartContext)
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate();

  const authJWT = {
    headers: {
        'Authorization': `Bearer ${authCtx.token}`
    }
}

  const paymentHandler = async () => {
    const order = {
      delivery: {
        deliverer: {
          name: "Marek",
          surname: "Frankowski",
          phoneNumber: "728893912"
        }
      },
      products: cartCtx.items,
      user: authCtx.user
    }

    console.log(order)

    await axios.post("http://localhost:8888/api/orders/save", order, authJWT).then((response) => {
      navigate('/payment')
    })


  }

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (

    <main>
      <div>
        <Navbar search={true} />
        <section class="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                <div class="card">
                  <div class="card-body p-4">

                    <div class="row">

                      <div class="col-lg-7">
                        <h5 class="mb-3"><a onClick={() => navigate('/')} class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Kontynuuj zakupy</a></h5>
                        <hr />

                        <div class="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p class="mb-1">Koszyk</p>
                            <p class="mb-0">Masz {numberOfCartItems} przedmiotów w koszyku</p>
                          </div>
                        </div>

                        {cartCtx.items.map((item, index) => (
                          <CartItem
                            key={index}
                            product={item}
                            amount={item.amount}
                            index={index}
                          />
                        ))}

                      </div>
                      <div class="col-lg-5">

                        <div class="card bg-primary text-white rounded-3">
                          <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <h5 class="mb-0">Szczegóły karty</h5>
                            </div>

                            <form class="mt-4">
                              <div class="form-outline form-white mb-4">
                                <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                  placeholder="Nazwisko właściciela" />
                                <label class="form-label" for="typeName">Nazwisko właściciela</label>
                              </div>

                              <div class="form-outline form-white mb-4">
                                <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                                  placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                                <label class="form-label" for="typeText">Numer karty</label>
                              </div>

                              <div class="row mb-4">
                                <div class="col-md-6">
                                  <div class="form-outline form-white">
                                    <input type="text" id="typeExp" class="form-control form-control-lg"
                                      placeholder="MM/YYYY" size="7" id="exp" minlength="7" maxlength="7" />
                                    <label class="form-label" for="typeExp">Wygasa</label>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-outline form-white">
                                    <input type="password" id="typeText" class="form-control form-control-lg"
                                      placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                    <label class="form-label" for="typeText">CVV</label>
                                  </div>
                                </div>
                              </div>

                            </form>

                            <hr class="my-4" />

                            <div class="d-flex justify-content-between mb-4">
                              <p class="mb-2">Suma</p>
                              <p class="mb-2">{cartCtx.totalAmount.toFixed(2)} PLN</p>
                            </div>

                            <button type="button" class="btn btn-info btn-block btn-lg">
                              <div onClick={() => paymentHandler()} class="d-flex justify-content-between">
                                <span> Płacę <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                              </div>
                            </button>

                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );

}
