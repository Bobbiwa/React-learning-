import React from 'react'
import { Button, Card } from 'antd';
import './courseCard.less'
export default function CourseCard() {
  return (
    <div>
      <Card style={{ width: '100%', border: '1px solid green', marginBottom: '20rem', marginTop: '20rem' }}>
        <div>
          <p className='card-title'>Java</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div style={{ marginLeft: '700rem' }}>
          <p>
            <span style={{ fontWeight: 'bold' }}>Authors:</span>
            <span>Dave Simon, Nick Mark</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Duration:</span>
            <span>8:00 hours</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Created:</span>
            <span>01.02.2018</span>
          </p>
          <Button style={{ marginTop: '10rem', marginLeft: '20rem' }}>Show course</Button>
        </div>
      </Card>
      <Card style={{ width: '100%', border: '1px solid green', marginBottom: '20rem' }}>
        <div>
          <p className='card-title'>ASP.NET</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div style={{ marginLeft: '700rem' }}>
          <p>
            <span style={{ fontWeight: 'bold' }}>Authors:</span>
            <span>Dave Simon, Nick Mark</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Duration:</span>
            <span>8:00 hours</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Created:</span>
            <span>01.02.2018</span>
          </p>
          <Button style={{ marginTop: '10rem', marginLeft: '20rem' }}>Show course</Button>
        </div>
      </Card>
      <Card style={{ width: '100%', border: '1px solid green', marginBottom: '20rem' }}>
        <div>
          <p className='card-title'>JavaScript</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div style={{ marginLeft: '700rem' }}>
          <p>
            <span style={{ fontWeight: 'bold' }}>Authors:</span>
            <span>Dave Simon, Nick Mark</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Duration:</span>
            <span>8:00 hours</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Created:</span>
            <span>01.02.2018</span>
          </p>
          <Button style={{ marginTop: '10rem', marginLeft: '20rem' }}>Show course</Button>
        </div>
      </Card>
      <Card style={{ width: '100%', border: '1px solid green' }}>
        <div>
          <p className='card-title'>Angular</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div style={{ marginLeft: '700rem' }}>
          <p>
            <span style={{ fontWeight: 'bold' }}>Authors:</span>
            <span>Dave Simon, Nick Mark</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Duration:</span>
            <span>8:00 hours</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Created:</span>
            <span>01.02.2018</span>
          </p>
          <Button style={{ marginTop: '10rem', marginLeft: '20rem' }}>Show course</Button>
        </div>
      </Card>
    </div>
  )
}
