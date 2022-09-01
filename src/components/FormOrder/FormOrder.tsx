import { Button, Form, Input } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { cartType } from "../../store/Cart/Slices";
export type formValuesType = {
  receiver: string;
  formNumber: string;
  receivePlace: string;
};

type propsType = {
  onSubmit: (formValues: formValuesType) => void;
};

export default function FormOrder({ onSubmit }: propsType) {
  const cartItems = useSelector(
    ({ CartStore }: { CartStore: cartType }) => CartStore.items
  );

  const onFinish = (values: any) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Receiver"
        name="receiver"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Receive place"
        name="receivePlace"
        rules={[
          {
            required: true,
            message: "Please input your address to receiver items",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
          {
            pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
            message: "Please input phone number",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 16 }}>
        <Button
          disabled={cartItems && cartItems.length === 0}
          type="primary"
          htmlType="submit"
        >
          Order now!
        </Button>
      </Form.Item>
    </Form>
  );
}
