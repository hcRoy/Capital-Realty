import React from "react";
import { Button, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const GetInTouchForm = () => (
  <div className="form-container">
    <Form
      name="get_in_touch_form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Full Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter Full Name",
          },
        ]}
      >
        <Input placeholder="Full Name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter Email",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone_no"
        rules={[
          {
            required: true,
            pattern: /^\+\d{1,3}\s?\d{10}$/,
            message: "Please enter Phone Number",
            min: 10,
          },
        ]}
      >
        <Input placeholder="+91 9876543210" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[
          {
            required: true,
            message: "Please enter Message",
          },
        ]}
      >
        <Input.TextArea placeholder="Message" rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="send-message-btn">
          Send Message
        </Button>
      </Form.Item>
    </Form>
  </div>
);
export default GetInTouchForm;
