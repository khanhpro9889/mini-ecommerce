import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, InputNumber, message, Popconfirm, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { productType } from "../../routers/Home/Home";
import { itemCartType } from "../../store/Cart/Slices";

type propsType = {
  cartItem: {
    item: productType;
    quantity: number;
  };
  addQuantityItemCart: (item: productType, quantity: number) => void;
  deleteItemCart: (item: itemCartType) => void;
};

export default function CartItem({
  cartItem,
  addQuantityItemCart,
  deleteItemCart,
}: propsType) {
  const onChange = (value: number) => {
    addQuantityItemCart(cartItem.item, value);
  };

  const confirm = () => {
    deleteItemCart(cartItem);
    message.success("Delete success!");
  };

  return (
    <Row gutter={[8, 8]} className="cart-item">
      <Col flex="100px" className="item-image">
        <img alt="product" width="100%" src={cartItem.item.images[0]} />
      </Col>
      <Col flex="auto" className="item-info">
        <div className="text-overflow">
          <Link to={`/product/${cartItem.item.id}`}>
            <strong>{cartItem.item.title}</strong>
          </Link>
        </div>
        <div>{cartItem.item.category.name}</div>
      </Col>
      <Col flex="50px">
        <InputNumber min={1} value={cartItem.quantity} onChange={onChange} />
      </Col>
      <Col flex="50px">
        <div className="text-center">
          <strong>{cartItem.item.price * cartItem.quantity}$</strong>
        </div>
      </Col>
      <Col flex="40px">
        <Popconfirm
          title="Are you sure to delete this task?"
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      </Col>
    </Row>
  );
}
