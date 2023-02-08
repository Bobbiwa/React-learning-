import React from 'react'
import { Input, Button } from 'antd';
export default function SearchBar() {
  return (
    <div className='search-bar-container'>
      <Input placeholder="Enter course name..." style={{ width: '500rem', marginRight: '10rem' }} />
      <Button style={{ width: '100rem', marginRight: '510rem' }}>Search</Button>
      <Button style={{ width: '200rem' }}>Add new course</Button>
    </div>
  )
}
