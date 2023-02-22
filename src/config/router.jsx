import React from 'react';
import { useRoutes } from 'react-router-dom';
import App from '../App';
import Courses from '../components/Courses/Courses';
import CreateCourse from '../components/CreateCourse/CreateCourse';
import Login from '../components/Login/Login';
import Register from '../components/Registration/Registration';
import CourseInfo from '../components/CourseInfo/CourseInfo';
const routerList = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Register />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/courses',
        element: <Courses />,
      },
      {
        path: '/courses/:id',
        element: <Courses />,
      },
      {
        path: '/courses/add',
        element: <CreateCourse />,
      },
      {
        path: '/courses/:courseId',
        element: <CourseInfo />,
      },
    ],
  },
];

const RenderRouter = () => useRoutes(routerList);

export default RenderRouter;
