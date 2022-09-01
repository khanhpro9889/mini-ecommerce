import React, { useState } from "react";
import { Col, Button, Row, Drawer } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import Navigation from "../../components/Navigation";
import HeaderDrawer from "../../components/HeaderDrawer";
import { Link } from "react-router-dom";
import { categoryType } from "../MainLayout/MainLayout";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/Cart/Slices";

type propsType = {
  categories: categoryType[];
};

export default function Header({ categories }: propsType) {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container">
      <Row>
        <Col flex="70px">
          <Link to="/">LOGO</Link>
        </Col>
        <Col flex="auto">
          <div className="menu-desktop">
            <Navigation
              open={() => dispatch(openModal())}
              categories={categories}
            />
          </div>
          <div className="menu-mobile">
            <Button type="primary" onClick={showDrawer}>
              <BarsOutlined />
            </Button>
            <Drawer
              title={<HeaderDrawer closeDrawer={onClose} />}
              placement={"top"}
              closable={false}
              onClose={onClose}
              visible={visible}
              key={"top"}
              height="auto"
              className="navigation-drawer"
            >
              <Navigation
                closeDrawer={onClose}
                open={() => dispatch(openModal())}
                categories={categories}
              />
            </Drawer>
          </div>
        </Col>
      </Row>
    </div>
  );
}
