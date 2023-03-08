import React from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from './components/Logo/Logo';
import { Button } from 'antd';
import { removeTokenNameAuth, getName } from '../../utils/token';
import { logoutThunk } from '../../store/user';
import { useSelector } from 'react-redux';
import './header.less';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    const ret = await dispatch(logoutThunk());
    if (ret.payload.status === 200) message.success('Success!', 1);
    removeTokenNameAuth();
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
