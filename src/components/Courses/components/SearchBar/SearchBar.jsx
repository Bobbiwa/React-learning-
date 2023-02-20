import React from 'react'
import { Input, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
export default function SearchBar(props) {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate('/create')
  }
  return (
    <div className='search-bar-container'>
      <Input placeholder="Enter course name..." style={{ width: '500rem', marginRight: '10rem' }} />
      <div style={{ display: 'inline-block', marginRight: '550rem' }}>
        {props.btn('Search')}
      </div>
      <Button type='primary' size='large' onClick={handleCreate}><PlusCircleOutlined />Add new course</Button>
    </div>
  )
}
