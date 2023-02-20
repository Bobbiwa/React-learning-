import React from 'react'
import { Card } from 'antd';
import { mockedCoursesList, mockedAuthorsList } from '../../../../database'
import './courseCard.less'


export default function CourseCard(props) {
  return (
    <div>
      {mockedCoursesList.map((item, index) =>
      (
        <Card key={index} style={{ width: '100%', border: '1px solid green', marginBottom: '20rem', marginTop: '20rem' }}>
          <div style={{ width: '55%' }}>
            <p className='card-title'>{item.title}</p>
            <p>{item.description}</p>
          </div>
          <div style={{ width: '44%', display: 'flex',justifyContent:'flex-end' }}>
            <div style={{ width: '60%' }}>
              <p>
                <span style={{ fontWeight: 'bold' }}>Authors:</span>
                <span style={{ width: '100rem' }}>
                  {mockedAuthorsList.find((items) => items.id === item.authors[0]).name}{', '}
                  {mockedAuthorsList.find((items) => items.id === item.authors[1]).name}
                </span>
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
          </div>
        </Card>
      ))}
    </div>
  )
}
