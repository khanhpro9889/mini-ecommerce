import React from "react";
import { Spin, Row } from "antd";

export default function Loading() {
  return (
    <Row
      style={{ height: "100vh", width: "100vw" }}
      justify="center"
      align="middle"
    >
      <Spin size="large" />
    </Row>
  );
}
