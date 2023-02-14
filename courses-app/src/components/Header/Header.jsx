import React from 'react'
import Logo from './components/Logo/Logo'
import './header.less'
export default function Header(props) {
  return (
    <div className='header-container'>
      <Logo />
      <span className='header-title'>COURSES</span>
      <span className='header-user'>Dave</span>
      {props.btn('Logout')}
    </div>
  )
}
