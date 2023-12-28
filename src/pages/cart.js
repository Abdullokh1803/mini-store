import React from "react";
import CartItem from "../components/cart-items";

const Cart = ({ cart, deleteProduct }) => {
  return (
    <div className="d-flex flex-wrap gap-4 justify-content-around mt-4">
      {cart.map((product, index) => {
        return (
          <CartItem
            onClick={() => deleteProduct(index)}
            key={index}
            {...product}
            children="Delete"
          />
        );
      })}
    </div>
  );
};
export default Cart;
