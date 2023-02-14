import React from 'react'
import { Card } from 'antd';
import { mockedCoursesList, mockedAuthorsList } from '../../../../database'
import './courseCard.less'


export default function CourseCard(props) {
  return (
    <div>
      {mockedCoursesList.map((item) =>
      (
        <Card style={{ width: '100%', border: '1px solid green', marginBottom: '20rem', marginTop: '20rem' }}>
          <div>
            <p className='card-title'>{item.title}</p>
            <p>{item.description}</p>
          </div>
          <div style={{ marginLeft: '700rem' }}>
            <p>
              <span style={{ fontWeight: 'bold' }}>Authors:</span>
              <span>{item.authors}</span>
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Duration:</span>
              <span>8:00 hours</span>
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Created:</span>
              <span>01.02.2018</span>
            </p>
            <div style={{ marginTop: '10rem', marginLeft: '20rem' }}>
              {props.btn('Show course')}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
