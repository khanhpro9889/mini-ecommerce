import React from "react";
import { Dropdown, Space, Menu, Badge, Button } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  LayoutOutlined,
  ShoppingCartOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { categoryType } from "../../layouts/MainLayout/MainLayout";
import { useSelector } from "react-redux";
import { cartType } from "../../store/Cart/Slices";
import { CATEGORY_PATH_NO_ID, HOME_PATH } from "../../constants/path";
type propsType = {
  categories: categoryType[];
  open: () => void;
  closeDrawer?: () => void;
};

export default function Navigation({
  categories,
  open,
  closeDrawer,
}: propsType) {
  const cartItems = useSelector(
    ({ CartStore }: { CartStore: cartType }) => CartStore.items
  );
  const menu = (
    <Menu
      items={categories.map((item) => {
        return {
          label: (
            <Link to={`${CATEGORY_PATH_NO_ID}/${item.id}`}>{item.name}</Link>
          ),
          key: item.id,
        };
      })}
    />
  );
  return (
    <nav>
      <ul>
        <Space size="large" className="justify">
          <li>
            <Link to={HOME_PATH}>
              <Space>
                <HomeOutlined />
                Home
              </Space>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Space>
                <LayoutOutlined />
                About
              </Space>
            </Link>
          </li>
          <li>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a href="/" onClick={(e) => e.preventDefault()}>
                <Space>
                  <AppstoreOutlined />
                  Categories
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <Button
              disabled={cartItems.length === 0}
              onClick={() => {
                open();
                if (closeDrawer) closeDrawer();
              }}
            >
              <Badge count={cartItems && cartItems.length} size="default">
                <Space>
                  <ShoppingCartOutlined />
                  Cart
                </Space>
              </Badge>
            </Button>
          </li>
        </Space>
      </ul>
    </nav>
  );
}
