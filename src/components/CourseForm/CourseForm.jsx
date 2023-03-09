import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Select, message } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useState, useMemo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addCourseThunk, updateCourseThunk } from '../../store/courses/index';
import { addAuthorThunk } from '../../store/authors/index';
import { queryCourseById } from '.././../service/courses';

const { TextArea } = Input;
export default function CourseForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [time, setTime] = useState('00:00');
  const [author, setAuthor] = useState('');

  const [handleType, setHandleType] = useState('');
  const { courseId } = useParams();
  const formInstance = useRef();

  useEffect(() => {
    if (courseId) {
      setHandleType('update');
      queryCourseById(courseId).then((ret) => {
        const { result } = ret.data;
        result.duration = result.duration * 60;
        //数据回显
        formInstance.current.setFieldsValue(result);
      });
    } else {
      setHandleType('add');
    }
  }, [courseId, queryCourseById, setHandleType]);

  const { authorList } = useSelector((state) => state.author);
  const options = useMemo(() => {
    return authorList.map((item) => {
      return { value: item.id, label: item.name };
    });
  }, [authorList]);

  const handleSelectChange = (value) => {
    console.log(`selected ${value}`);
  };

  function fixNum(num) {
    return ('' + num).length < 2
      ? (new Array(2 + 1).join('0') + num).slice(-2)
      : '' + num;
  }

  const handleTime = useCallback(() => {
    (e) => {
      var { value } = e.target;

      if (value) value = parseInt(value, 10);

      if (value > 60) {
        const h = parseInt(value / 60, 10);
        const m = value % 60;
        setTime(`${fixNum(h)}:${fixNum(m)}`);
      } else {
        setTime(`00:${fixNum(value)}`);
      }
    };
  });

  const onFinish = async (values) => {
    // values.creationDate = new Date().toLocaleDateString();
    values.duration = parseInt(values.duration, 10) / 60;
    if (handleType === 'add') {
      const ret = await dispatch(addCourseThunk(values));
      if (ret.payload.status === 201) message.success('Success', 1);
    } else {
      dispatch(updateCourseThunk({ courseId, values }));
    }

    navigate('/courses');
  };

  const handleCreateAuthor = () => {
    const ret = { name: author };
    dispatch(addAuthorThunk(ret));
    message.success('success', 1);
  };
  return (
    <>
      <Button
        onClick={() => navigate('/courses')}
        type="primary"
        size="large"
        style={{ marginBottom: '2%' }}
      >
        <RollbackOutlined />
        Back
      </Button>
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
          ref={formInstance}
        >
          <Form.Item label="Title" name="title">
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Author name">
            <Input
              placeholder="Author name"
              style={{ width: '230rem', marginRight: '5rem' }}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            <Button onClick={handleCreateAuthor}>create author</Button>
          </Form.Item>
          <Form.Item label="Select" name="authors">
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
          <Form.Item label="Duration" name="duration">
            <Input
              onChange={handleTime}
              style={{ width: '100%' }}
              placeholder="Enter duration in minutes..."
              suffix="min"
            />
          </Form.Item>
          <Form.Item label="Duration">
            <div style={{ marginTop: '-5rem' }}>
              <span style={{ fontSize: '30rem', fontWeight: 'bold' }}>
                {time}
              </span>
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
  );
}
