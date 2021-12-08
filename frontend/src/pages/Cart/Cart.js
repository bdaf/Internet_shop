import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const CartItem = ({ product, index, handleRemove }) => {
  return (
<div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-shopping-carts/img1.jpg"
                            class="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}}/>
                        </div>
                        <div class="ms-3">
                          <h5>{product.title}</h5>
                          <p class="small mb-0">{product.name}</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style={{width: '80px'}}>
                          <h5 class="mb-0">{product.price} PLN</h5>
                        </div>
                        <a onClick={() => handleRemove(index)} style={{color: '#cecece'}}><i class="fas fa-trash-alt"></i>Usuń</a>
                      </div>
                    </div>
                  </div>
                </div>
    
  );
};

export default function Store() {
  let productList=[]
  if(localStorage.cartList){
  productList = JSON.parse(localStorage.cartList);
  }
  const totalPrice = productList.reduce((total, b) => total + b.price, 0);
  

  const handleRemove = (index) => {
    productList.splice(index, 1);
    localStorage.cartList = JSON.stringify(productList);
    window.location.href='/cart'
  };

    return (
      
      <main>
            <div>
        <Navbar search={true} />
        <section class="h-100 h-custom" style={{backgroundColor: '#eee'}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card">
          <div class="card-body p-4">

            <div class="row">

              <div class="col-lg-7">
              <Link to="/">
                <h5 class="mb-3"><i
                      class="fas fa-long-arrow-alt-left me-2"></i>Kontynuuj zakupy</h5>
                      </Link>
                <hr/>

                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p class="mb-1">Koszyk</p>
                    <p class="mb-0">Masz {productList.length} przedmiotów w koszyku</p>
                  </div>
                </div>

                {productList.map((item, index) => (


<CartItem
handleRemove={handleRemove}
key={index}
product={item}
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
                            <label class="form-label" for="typeText">Cvv</label>
                          </div>
                        </div>
                      </div>

                    </form>

                    <hr class="my-4"/>

                    <div class="d-flex justify-content-between mb-4">
                      <p class="mb-2">Suma</p>
                      <p class="mb-2">PLN {totalPrice}</p>
                    </div>

                    <button type="button" class="btn btn-info btn-block btn-lg">
                    <Link to="/payment"> <div class="d-flex justify-content-between">
                        <span> Płacę <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                      </div></Link>
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
        <Footer/>
    </div>
      </main>
    );
  
                }
