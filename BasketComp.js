import React from "react";
import "./style.css";

export default function BasketComponent(props) {
  const { cartItem, onAdd, onRemove } = props;

  const itemsPrice = cartItem.reduce((a, c) => a + c.price + c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 10000 ? 0 : 100;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItem.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItem.map((item) => {
        return (
          <>
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2">
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
              </div>
              <div className="col-2 text-right">
                {item.qty} * ${item.price.toFixed(2)}
              </div>
            </div>
          </>
        );
      })}

      {cartItem.length !== 0 && (
        <>
          <hr></hr>
          <hr></hr>
          <div className="row">
            <div className="col-2">Item Price</div>
            <div className="col-1">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1">${shippingPrice.toFixed(2)}</div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-2">
              <strong>Total</strong> Price
            </div>
            <div className="col-1">${totalPrice.toFixed(2)}</div>
          </div>
          <hr></hr>

          <div className="row">
            <button onClick={() => alert("Place Order will Implement Soon...")}>
              Place Order
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
