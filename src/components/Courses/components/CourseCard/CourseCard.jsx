import React, { useMemo, useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button } from 'antd';
// import { mockedCoursesList, mockedAuthorsList } from '../../../../database';
import CourseInfo from '../../../CourseInfo/CourseInfo';
import { queryCourseById, queryCourseAll } from '../../../../service/courses';
import { queryAuthorsAll } from '../../../../service/users';
import './courseCard.less';

export default function CourseCard() {
  const navigate = useNavigate()
  let { id } = useParams();

  useEffect(() => {
    queryCourseAll().then((res) => {
      setCoursesData(res.data.result);
    });
    queryAuthorsAll().then((res) => {
      setAuthorsData(res.data.result);
    });
  }, []);

  const [coursesData, setCoursesData] = useState([]);
  const [authorsData, setAuthorsData] = useState([]);

  const result = useMemo(() => {
    if (id) {
      return queryCourseById(id);
    }
  }, [id]);

  const handleClick = (id) => {
    return () => {
      navigate(`/courses/${id}`)
    }
  }
  return (
    <div>
      {id && <CourseInfo info={result} />}
      {!id && (
        <div>
          <SearchBar />
          {coursesData.map((item, index) => (
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
                      {
                        authorsData.find(
                          (items) => items.id === item.authors[0]
                        )?.name
                      }
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Duration: </span>
                    <span>8:00 hours</span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Created: </span>
                    <span>01.02.2018</span>
                  </p>
                  <div style={{ marginTop: '10rem', marginLeft: '20rem' }}>
                    <Button onClick={handleClick(item.id)}>Show course</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
