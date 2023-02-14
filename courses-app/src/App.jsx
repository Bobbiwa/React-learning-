import './App.less';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Btn from './common/Button/Btn'
function App() {
  return (
    <>
      <Header btn={Btn} />
      <Courses />
    </>
  );
}

export default App;
