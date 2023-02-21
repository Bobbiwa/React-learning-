import React from 'react'
import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockedAuthorsList } from '../../database'

const { TextArea } = Input;
export default function CreateCourse() {
  const [time, setTime] = useState('00:00')
  const navigate = useNavigate()

  const ret = mockedAuthorsList.map((item) => {
    return { value: item.id, label: item.name }
  })
  const options = ret
  const handleSelectChange = (value) => {
    console.log(`selected ${value}`);
  };

  function fixNum(num) {
    return ('' + num).length < 2 ? ((new Array(2 + 1)).join('0') + num).slice(-2) : '' + num;
  }

  const handleTime = useMemo(() => {
    return (e) => {
      var { value } = e.target

      if (value) value = parseInt(value)

      if (value > 60) {
        const h = parseInt(value / 60)
        const m = value % 60
        setTime(`${fixNum(h)}:${fixNum(m)}`)
      } else {
        setTime(`00:${fixNum(value)}`)
      }
    }
  })


  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <>
      <Button onClick={() => navigate('/course')} type="primary" size='large' style={{ marginBottom: '2%' }}><RollbackOutlined />Back</Button>
      <div style={{ marginLeft: '8%' }}>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
        >
          <Form.Item label="Title" name='title'>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name='description'>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Select" name='authors'>
            <Select
              mode="tags"
              style={{
                width: '100%',
              }}
              placeholder="Author Tags"
              onChange={handleSelectChange}
              options={options}
            />
          </Form.Item>
          <Form.Item label="Duration" name='duration'>
            <Input onChange={handleTime} style={{ width: '100%' }} placeholder='Enter duration in minutes...' suffix="min" />
          </Form.Item>
          <Form.Item label="Duration" name='time'>
            <div style={{ marginTop: '-5rem' }}>
              <span style={{ fontSize: '30rem', fontWeight: 'bold' }}>{time}</span>
              <span style={{ fontSize: '20rem' }}> hours</span>
            </div>
          </Form.Item>
          <Form.Item style={{ marginLeft: '20%' }}>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>

  )
}
