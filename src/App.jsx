import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import CouseContainer from './common/CourseContainer/index';
import { getToken } from './utils/token';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken()) {
      navigate('/courses');
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Header />
      <CouseContainer />
    </>
  );
}

export default App;
