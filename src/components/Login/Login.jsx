import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUserList } from '../../store/user/index';
import { setName } from '../../utils/token';
import LoginContainer from '../../common/LoginContainer';
import { login } from '../../service/login';
import { setToken } from '../../utils/token';
import './login.less';

function loginContent() {
  return (
    <div className="form_container">
      <p className="login_title">User Login</p>
      <UserOutlined className="username_icon" />
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input placeholder="Email" className="login_input" />
      </Form.Item>

      <LockOutlined className="password_icon" />
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder="Password" className="login_input" />
      </Form.Item>

      <Form.Item
        valuePropName="checked"
        wrapperCol={{
          offset: 0,
          span: '100%',
        }}
      >
        <div>
          <Checkbox className="login_checkbox">Remember me</Checkbox>
          <a href="#" className="login_forgot_password">
            Forgot password
          </a>
        </div>
      </Form.Item>

      <Form.Item>
        <Button className="login_button" block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <footer className="login_footer">
        <span style={{ color: '#fff' }}>{`Don't have an account?`}</span>
        <a href="/registration" className="login_footer_click">
          click me
        </a>
      </footer>
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const ret = await login(values);
    const { name, email } = ret.data.user;
    if (ret.status === 201) {
      setToken(ret.data.result);
      setName(name) //把name也存localStorage（在admin页面用）是为了防止admin页面刷新后名字丢失
      const rdxDate = { name, email, token: ret.data.result };
      dispatch(saveUserList(rdxDate));
      navigate('/courses');
    } else {
      message.error('username or password is incorrect', 1);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <LoginContainer
      content={loginContent}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
}
