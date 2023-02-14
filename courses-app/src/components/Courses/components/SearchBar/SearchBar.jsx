import React from 'react'
import { Input } from 'antd';
export default function SearchBar(props) {
  return (
    <div className='search-bar-container'>
      <Input placeholder="Enter course name..." style={{ width: '500rem', marginRight: '10rem' }} />
      <div style={{ display: 'inline-block', marginRight: '550rem' }}>
        {props.btn('Search')}
      </div>
      {props.btn('Add new course')}
    </div>
  )
}
