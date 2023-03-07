import React, { useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import CourseInfo from '../CourseInfo/CourseInfo';
import { queryCourseById } from '../../service/courses';
import { queryCoursesThunk } from '../../store/courses/index';
import { queryAuthorsThunk } from '../../store/authors/index';

import './courses.less';
export default function Courses() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const coursesData = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(queryCoursesThunk());
    dispatch(queryAuthorsThunk());
  }, [queryCoursesThunk]);

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
          {coursesData.courseList.map((item, index) => (
            <CourseCard key={index} item={item} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
