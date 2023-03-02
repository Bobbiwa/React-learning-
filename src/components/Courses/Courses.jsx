import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import CourseInfo from '../CourseInfo/CourseInfo';
import { queryCourseById } from '../../service/courses';

import './courses.less';
export default function Courses() {
  const { id } = useParams();

  const result = useMemo(() => {
    if (id) {
      return queryCourseById(id);
    }
  }, [id]);
  return (
    <>
      {id && <CourseInfo info={result} />}
      {!id && (
        <div>
          <SearchBar />
          <CourseCard />
        </div>
      )}
    </>
  );
}
