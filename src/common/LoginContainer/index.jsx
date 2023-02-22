import React from 'react'
import PropTypes from 'prop-types';
import { Form } from 'antd';
import './index.less'
export default function LoginContainer(props) {
  return (
    <div className="login_container">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        // eslint-disable-next-line react/prop-types
        onFinish={props.onFinish}
        // eslint-disable-next-line react/prop-types
        onFinishFailed={props.onFinishFailed}
        autoComplete="off"
        className='login_form'
      >
        {/* eslint-disable-next-line react/prop-types */}
        {props.content()}
      </Form>
    </div>
  )
}

LoginContainer.propTypes = {
  content: PropTypes.func,
  onFinish:PropTypes.func,
  onFinishFailed:PropTypes.func
};
