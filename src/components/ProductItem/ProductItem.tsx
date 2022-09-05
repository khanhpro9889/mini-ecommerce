import React from "react";
import { Card, Skeleton } from "antd";
import { FullscreenOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { productType } from "../../routers/Category/Category";
import { Link, useNavigate } from "react-router-dom";
import { SINGLE_PATH_NO_ID } from "../../constants/path";
const { Meta } = Card;

type propsType = {
  item: productType;
  loading: boolean;
  addToCartStore: (item: productType) => void;
};
export default function ProductItem({
  item,
  addToCartStore,
  loading,
}: propsType) {
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <Skeleton active />
      ) : (
        <Card
          cover={<img alt="example" src={item.images[0]} />}
          actions={[
            <ShoppingCartOutlined
              key="cart"
              onClick={() => addToCartStore(item)}
            />,
            <FullscreenOutlined
              onClick={() => navigate(`/product/${item.id}`)}
              key="detail"
            />,
          ]}
        >
          <Meta
            title={
              <Link to={`${SINGLE_PATH_NO_ID}/${item.id}`}>
                <strong>{item.title}</strong>
              </Link>
            }
          />
          <Meta title={`${item.price}$`} />
        </Card>
      )}
    </>
  );
}
