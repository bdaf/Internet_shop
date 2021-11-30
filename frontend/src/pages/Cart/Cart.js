import React from "react";
import { useCart, useDispatchCart } from "../../components/Cart";

const CartItem = ({ product, index, handleRemove }) => {
  return (
    <article>
      <div className="dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
        <div className="dtc w3">
          <img src={product.imageUrl} className="db w-100" />
        </div>
        <div className="dtc v-top pl2">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">{product.title}</h1>
          <h2 className="f6 fw4 mt2 mb0 black-60">{product.name}</h2>
          <dl className="mt2 f6">
            <dt className="clip">Cena</dt>
            <dd className="ml0">
              {product.price.toLocaleString("en", {
                style: "currency",
                currency: "PLN"
              })}
            </dd>
          </dl>
          <button onClick={() => handleRemove(index)}>Usuń z koszyka</button>
        </div>
      </div>
    </article>
  );
};

export default function Store() {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + b.price, 0);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (items.length === 0) {
    return (
      <main>
        <p>Koszyk jest pusty</p>
      </main>
    );
  }
  return (
    <main>
      <p>
        Cena:{" "}
        {totalPrice.toLocaleString("en", {
          style: "currency",
          currency: "PLN"
        })}
      </p>
      {items.map((item, index) => (
        <CartItem
          handleRemove={handleRemove}
          key={index}
          product={item}
          index={index}
        />
      ))}
    </main>
  );
}
