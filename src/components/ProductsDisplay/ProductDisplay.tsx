import { Col, message, Pagination, PaginationProps, Row } from "antd";
import React, { useEffect, useState } from "react";
import { productType } from "../../routers/Category/Category";
import ProductItem from "../ProductItem";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addToCart } from "../../store/Cart/Slices";
import { useDispatch } from "react-redux";

type propsType = {
  loading: boolean;
  products: productType[];
  currentPage: number;
  total: number;
  setCurrentPage: (page: number) => void;
  isCategory?: string;
};

export default function ProductDisplay({
  products,
  loading,
  currentPage,
  setCurrentPage,
  total,
  isCategory,
}: propsType) {
  const navigate = useNavigate();
  const [pageParams, setPageParams] = useSearchParams();
  const dispatch = useDispatch();

  const onChangePage: PaginationProps["onChange"] = (current, pageSize) => {
    setCurrentPage(current);
    if (isCategory) {
      return navigate({
        pathname: `/category/${isCategory}`,
        search: `?page=${current}`,
      });
    }
    navigate({
      pathname: "/",
      search: `?page=${current}`,
    });
  };

  useEffect(() => {
    let pageFromUrl = pageParams.get("page");
    let pageInt: number;
    if (pageFromUrl) {
      pageInt = parseInt(pageFromUrl);
    } else {
      pageInt = 1;
    }
    setCurrentPage(pageInt);
  }, []);

  const addToCartStore = (item: productType) => {
    message.success("Added to cart");
    dispatch(addToCart(item));
  };

  return (
    <>
      <Row gutter={[16, 16]} className="min-height">
        {products.map((item) => {
          return (
            <Col
              key={item.id}
              className="gutter-row"
              lg={6}
              md={8}
              sm={8}
              xs={12}
            >
              <ProductItem
                addToCartStore={addToCartStore}
                loading={loading}
                item={item}
              />
            </Col>
          );
        })}
      </Row>
      <div className="horizontal-center pagination heading">
        <Pagination
          showTotal={(total) => `Total ${total} products`}
          defaultPageSize={10}
          onChange={onChangePage}
          current={currentPage}
          total={total}
        />
      </div>
    </>
  );
}
