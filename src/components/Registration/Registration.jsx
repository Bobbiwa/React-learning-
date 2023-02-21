import React from 'react';
import { Button, Form, Input, message } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  UnlockOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../../common/LoginContainer/index';
import registerApi from '../../service/register';
import './register.less';

function register() {
  return (
    <div className="register_container">
      <p className="register_title">Welcome to Register</p>
      <UserOutlined className="username_icon" />
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Username" className="register_input" />
      </Form.Item>

      <MessageOutlined className="email_icon" />
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input placeholder="Email" className="register_input" />
      </Form.Item>

      <UnlockOutlined className="password_icon" />
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder="Password" className="register_input" />
      </Form.Item>

      <LockOutlined className="confirm_password_icon" />
      <Form.Item
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          placeholder="Confirm password"
          className="register_input"
        />
      </Form.Item>

      <Form.Item>
        <Button className="login_button" block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      <footer className="login_footer">
        <span style={{ color: '#fff' }}>{`You already have an account?`}</span>
        <a href="/login" className="login_footer_click">
          click me
        </a>
      </footer>
    </div>
  );
}

export default function Register() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { name, email, password, confirmPassword } = values;
    if (confirmPassword === password) {
      const params = { name, email, password };
      const ret = await registerApi(params);
      if (ret.status === 201) {
        //由于response body没有token，所以注册成功后跳转至login页面
        navigate('/login');
      } else {
        message.error('username or password is incorrect', 1);
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <LoginContainer
      content={register}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
}
