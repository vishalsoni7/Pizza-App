import { useContext, useState } from "react";
import { PizzaContext } from "../context/PizzaContext";

export const Cart = () => {
  const { pizzaInCart } = useContext(PizzaContext);
  const [offer, setOffer] = useState(false);

  const totalTime = pizzaInCart.reduce(
    (acc, curr) => acc + curr.delivery_time,
    0
  );

  const applyOffer = (o) => {
    const offerPrice = pizzaInCart.reduce((acc, curr) => acc + curr.price, 0);
    return o ? offerPrice - 5 : offerPrice;
  };

  const applyDiscount = () => {
    setOffer((pre) => !pre);
  };

  return (
    <div>
      <h2>Cart </h2>
      <h4>Delivery Time: {totalTime} </h4>
      <h4> Total Bill Ammount: {applyOffer(offer)} </h4>
      <button className="addToCartBtn" onClick={applyDiscount}>
        Apply Coupon{" "}
      </button>
      <div>
        {" "}
        <ul>
          {pizzaInCart.map(
            ({ id, name, description, price, image, delivery_time }) => (
              <li key={id}>
                <img src={image} alt="pizza" width="230" height="200" />
                <h4>Name:- {name} </h4>
                <p>Description:- {description} </p>
                <p>$ {price} </p>
                <p>Time {delivery_time} </p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
