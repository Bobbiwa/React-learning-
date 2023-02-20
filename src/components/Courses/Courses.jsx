import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import CourseCard from './components/CourseCard/CourseCard'
import Btn from '../../common/Button/Btn'

import './courses.less'
export default function Courses() {
  return (
    <div>
      <SearchBar btn={Btn} />
      <CourseCard btn={Btn}/>
    </div>
  )
}
