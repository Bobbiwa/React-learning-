import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
// eslint-disable-next-line react/prop-types
export default function CourseInfo({ info }) {
  const navigate = useNavigate();
  const [data,setData] = useState([])
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    info.then((res) => {
      console.log(res.data);
      setData(res.data.result)
    });
  }, [info]);
  return (
    <div>
      <div>
        <Button
          onClick={() => navigate('/courses')}
          type="primary"
          size="large"
          style={{ marginBottom: '2%' }}
        >
          <RollbackOutlined />
          Back
        </Button>
      </div>
      <div style={{ fontSize: 'xx-large', textAlign: 'center' }}>{data.title}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '60%' }}>{data.description}</div>
        <div style={{ width: '40%' }}>
          <p style={{ marginBottom: '3%' }}>
            <span style={{ fontWeight: 'bold' }}>ID: </span>
            <span>{data.id}</span>
          </p>
          <p style={{ marginBottom: '3%' }}>
            <span style={{ fontWeight: 'bold' }}>Duration: </span>
            <span>{data.duration}</span>
          </p>
          <p style={{ marginBottom: '3%' }}>
            <span style={{ fontWeight: 'bold' }}>Created: </span>
            <span>{data.creationDate}</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Authors: </span>
            <span>{data.authors}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
