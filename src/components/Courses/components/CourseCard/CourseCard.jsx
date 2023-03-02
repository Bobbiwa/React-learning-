/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'antd';
import { queryAuthorsAll } from '../../../../service/users';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '../../../../store/courses/index';
import { saveAuthorList } from '../../../../store/authors/index';
import './courseCard.less';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


export default function CourseCard({ item, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    queryAuthorsAll().then((res) => {
      const { result } = res.data;
      setAuthorsData(result);
      dispatch(saveAuthorList(result));
    });
  }, []);

  const [authorsData, setAuthorsData] = useState([]);

  const handleClick = (id) => () => navigate(`/courses/${id}`);

  const handleDelete = (id) => () => dispatch(deleteCourse(id));

  return (
    <Card
      key={index}
      style={{
        width: '100%',
        border: '1px solid green',
        marginBottom: '20rem',
        marginTop: '20rem',
      }}
    >
      <div style={{ width: '55%' }}>
        <p className="card-title">{item.title}</p>
        <p>{item.description}</p>
      </div>
      <div
        style={{
          width: '44%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div style={{ width: '60%' }}>
          <p>
            <span style={{ fontWeight: 'bold' }}>Authors: </span>
            <span style={{ width: '100rem' }}>
              {authorsData.find((items) => items.id === item.authors[0])?.name}
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Duration: </span>
            <span>{item.duration} hours</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Created: </span>
            <span>{item.creationDate}</span>
          </p>
          <div style={{ marginTop: '10rem', marginLeft: '20rem' }}>
            <Button onClick={handleClick(item.id)}>Show course</Button>
            <Button style={{ margin: '0 3rem' }}>
              <EditOutlined />
            </Button>
            <Button onClick={handleDelete(item.id)}>
              <DeleteOutlined />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
