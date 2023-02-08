import React from 'react'
import { Button } from 'antd'
import Logo from './components/Logo/Logo'
import './header.less'
export default function Header() {
  return (
    <div className='header-container'>
      <Logo />
      <span className='header-title'>COURSES</span>
      <span className='header-user'>Dave</span>
      <Button>Logout</Button>
    </div>
  )
}
