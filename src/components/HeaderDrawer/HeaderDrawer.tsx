import React from "react";
import { Row, Col, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

type propsType = {
  closeDrawer: () => void;
};

export default function HeaderDrawer({ closeDrawer }: propsType) {
  return (
    <Row className="justify">
      <Col flex="70px" className="vertical-center">
        <a href="/">LOGO</a>
      </Col>
      <Col>
        <Button type="primary" onClick={closeDrawer}>
          <CloseCircleOutlined />
        </Button>
      </Col>
    </Row>
  );
}
