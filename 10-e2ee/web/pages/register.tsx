import React from "react";
import { Inter } from "next/font/google";
import { Button, Form, Input } from "antd";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

interface ICallServiceRegisterProps {
  email: string;
  password: string;
}

const callServiceRegister = async (props: ICallServiceRegisterProps) => {
  const { email, password } = props;
  console.log("process.env.NEXT_PUBLIC_SERVICE_URL", process.env);
  // const response = await axios.post(process.env.NEXT_PUBLIC_SERVICE_URL, {
  //   email,
  //   password,
  // });
  // console.log("response", response);
};

export default function RegisterPage() {
  const onFinish = (values: any) => {
    const { email, password } = values;
    console.log("customKey", process.env.customKey);
    console.log("NEXT_PUBLIC_SERVICE_URL", process.env.NEXT_PUBLIC_SERVICE_URL);
    console.log("SERVICE_URL", process.env.SERVICE_URL);
    console.log("NODE_ENV", process.env.NODE_ENV);
    // callServiceRegister({ email, password });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ email: "", password: "" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}

export const getServerSideProps = async () => {
  return { props: {} };
};
