import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CHECKOUT_PATH } from "../../constants/path";
import { cartType, closeModal } from "../../store/Cart/Slices";
import CartItemsDisplay from "../CartItemsDisplay";

type propsType = {
  visible: boolean;
  close: () => void;
};

export default function CartModal({ visible, close }: propsType) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(
    ({ CartStore }: { CartStore: cartType }) => CartStore.items
  );
  const handleOk = () => {
    dispatch(closeModal());
    navigate(CHECKOUT_PATH);
  };

  const handleCancel = () => {
    close();
  };

  return (
    <Modal
      width={600}
      visible={visible}
      title={
        <strong>
          <ShoppingCartOutlined />
          Shopping Cart
        </strong>
      }
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button
          disabled={cartItems.length === 0}
          key="submit"
          type="primary"
          onClick={handleOk}
        >
          Check out
        </Button>,
      ]}
    >
      <CartItemsDisplay />
    </Modal>
  );
}
