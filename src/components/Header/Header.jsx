import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from './components/Logo/Logo';
import { Button } from 'antd';
import { removeTokenandName,getName } from '../../utils/token';
import { logOut } from '../../store/user';
import { useSelector } from 'react-redux';
import './header.less';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    removeTokenandName();
    dispatch(logOut());
    navigate('/login');
  };
  const ret = useSelector((state) => state.user);
  const { name } = ret.userList;
  const userName = name || getName();
  return (
    <div className="header-container">
      <Logo />
      <span className="header-title">COURSES</span>
      <span className="header-user" style={{ fontSize: '15rem' }}>
        {userName}
      </span>
      <Button onClick={handleClick}>logout</Button>
    </div>
  );
}
