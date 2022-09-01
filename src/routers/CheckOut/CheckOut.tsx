import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Tabs } from "antd";
import React from "react";
import CartItemsDisplay from "../../components/CartItemsDisplay";
import FormOrder from "../../components/FormOrder";
import { formValuesType } from "../../components/FormOrder/FormOrder";
const { TabPane } = Tabs;

export default function CheckOut() {
  const onSubmit = (values: formValuesType) => {
    console.log(values);
  };

  return (
    <div className="container min-height-full-screen">
      <div className="horizontal-center title-checkout">
        <h1>
          <strong>Check out</strong>
        </h1>
      </div>
      <Row gutter={[32, 32]} className="checkout">
        <Col sm={13} xs={24}>
          <div>
            <h2>
              <ShoppingCartOutlined /> Your shopping cart
            </h2>
          </div>
          <CartItemsDisplay />
        </Col>
        <Col sm={11} xs={24}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Pay when delivery" key="1">
              <FormOrder onSubmit={onSubmit} />
            </TabPane>
            <TabPane tab="Online payment" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}
