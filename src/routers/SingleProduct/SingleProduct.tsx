import {
  Col,
  Row,
  Carousel,
  Image,
  Breadcrumb,
  Skeleton,
  Button,
  Typography,
  message,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productType } from "../Category/Category";
import { categoryType } from "../../layouts/MainLayout/MainLayout";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Cart/Slices";
import { CATEGORY_PATH } from "../../constants/path";
const { Title, Paragraph } = Typography;

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState<productType>({} as productType);
  const [category, setCategory] = useState<categoryType>({} as categoryType);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const addToCartStore = (item: productType) => {
    message.success("Added to cart");
    dispatch(addToCart(item));
  };

  useEffect(() => {
    const getSingleProduct = async (id: number) => {
      setLoading(true);
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setCategory(data.category);
      setLoading(false);
    };
    if (id && parseInt(id)) {
      getSingleProduct(parseInt(id));
    }
  }, [id]);
  return (
    <>
      <Row className="breadcumb heading">
        <div className="container">
          {loading ? (
            <Skeleton.Input active style={{ width: "100%" }} />
          ) : (
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`${CATEGORY_PATH}/${category.id}`}>
                  {category.name}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {product.title || "Product name"}
              </Breadcrumb.Item>
            </Breadcrumb>
          )}
        </div>
      </Row>
      <div className="container single-product">
        <Row gutter={32}>
          <Col sm={12} xs={24}>
            <Carousel>
              {product.images &&
                product.images.map((item) => {
                  return (
                    <div key={item}>
                      <Image
                        alt="Images"
                        // width={200}
                        src={item}
                      />
                    </div>
                  );
                })}
            </Carousel>
          </Col>
          <Col sm={12} xs={24}>
            <div className="flex-column-between-vertical height-100 product-detail">
              {loading ? (
                <Skeleton active />
              ) : (
                <>
                  <Title>{product.title}</Title>
                  <Title level={3}>{product.price} $</Title>
                  <Paragraph>{product.description}</Paragraph>
                  <Button onClick={() => addToCartStore(product)}>
                    <ShoppingCartOutlined />
                  </Button>
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
