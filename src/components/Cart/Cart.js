import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const SendDataToBackendHandler = (userData) => {
    fetch(
      "https://react-http-489ae-default-rtdb.europe-west1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
  };

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const showCheckoutHandler = () => {
    setShowCheckoutForm(true);
  };

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItemsInCart = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {showCheckoutForm && (
        <Checkout
          onHideCart={props.onHideCart}
          onSubmit={SendDataToBackendHandler}
        />
      )}
      <div className={classes.actions}>
        {!showCheckoutForm && (
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
        )}
        {!showCheckoutForm && hasItemsInCart && (
          <button className={classes.button} onClick={showCheckoutHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
