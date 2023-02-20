import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.less'
export default function index() {
  return (
    <div className='content-container'>
      <Outlet />
    </div>
  )
}
