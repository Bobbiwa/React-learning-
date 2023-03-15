/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourseThunk } from '../../../../store/courses/index';
import './courseCard.less';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { getAuth } from '../../../../utils/token';

export default function CourseCard({ item, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authorsData = useSelector((state) => state.author).authorList;

  const handleClick = (id) => () => navigate(`/courses/${id}`);

  const handleDelete = (id) => () => dispatch(deleteCourseThunk(id));

  const handleEdit = (id) => () => navigate(`/courses/update/${id}`);

  const isAuth = () => (getAuth() === 'true' ? true : false);
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
        <p className="card-title" role="title">{item.title}</p>
        <p role="desc">{item.description}</p>
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
            <span style={{ width: '100rem' }} role="author">
              {authorsData.find((items) => items.id === item.authors[0])?.name}
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Duration: </span>
            <span>{item.duration.toFixed(2)} hours</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Created: </span>
            <span>{item.creationDate}</span>
          </p>

          <div style={{ marginTop: '10rem', marginLeft: '20rem' }}>
            <Button onClick={handleClick(item.id)}>Show course</Button>
            {isAuth() && (
              <div style={{ display: 'inline-block' }}>
                <Button
                  style={{ margin: '0 3rem' }}
                  onClick={handleEdit(item.id)}
                >
                  <EditOutlined />
                </Button>
                <Button onClick={handleDelete(item.id)}>
                  <DeleteOutlined />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
