import React from 'react'
import './App.less';
import Header from './components/Header/Header';
import CouseContainer from './common/CourseContainer/index'
import Btn from './common/Button/Btn'
function App() {
  return (
    <>
      <Header btn={Btn} />
      <CouseContainer/>
    </>
  );
}

export default App;
