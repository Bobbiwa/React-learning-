import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import { Button } from 'antd';
import { removeToken } from '../../utils/token';
import './header.less';

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    removeToken();
    navigate('/login');
  };
  return (
    <div className="header-container">
      <Logo />
      <span className="header-title">COURSES</span>
      <span className="header-user">{window.localStorage.getItem('name')}</span>
      <Button onClick={handleClick}>logout</Button>
    </div>
  );
}
