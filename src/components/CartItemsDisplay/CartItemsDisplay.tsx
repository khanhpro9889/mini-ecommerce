import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productType } from "../../routers/Category/Category";
import {
  addQuantity,
  cartType,
  deleteFromCart,
  itemCartType,
} from "../../store/Cart/Slices";
import CartItem from "../CartItem/CartItem";

export default function CartItemsDisplay() {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    ({ CartStore }: { CartStore: cartType }) => CartStore.items
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    if (cartItems) {
      for (let a of cartItems) {
        sum += a.item.price * a.quantity;
      }
    }
    setTotal(sum);
  }, [cartItems]);

  const addQuantityItemCart = (item: productType, quantity: number) => {
    dispatch(addQuantity({ item, quantity }));
  };

  const deleteItemCart = (item: itemCartType) => {
    dispatch(deleteFromCart(item));
  };

  return (
    <div className="cart-modal">
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((i) => {
          return (
            <CartItem
              deleteItemCart={deleteItemCart}
              key={i.item.id}
              cartItem={i}
              addQuantityItemCart={addQuantityItemCart}
            />
          );
        })
      ) : (
        <div className="horizontal-center vertical-center">
          <h3>No items</h3>
        </div>
      )}
      <Row>
        <Col flex="auto"></Col>
        <Col flex="200px" className="flex-end">
          <div>
            <h2>
              <strong>Total: {total}$</strong>
            </h2>
          </div>
        </Col>
      </Row>
    </div>
  );
}
