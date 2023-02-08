import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import CourseCard from './components/CourseCard/CourseCard'
import './courses.less'
export default function Courses() {
  return (
    <div className='content-container'>
      <SearchBar />
      <CourseCard />
    </div>
  )
}
