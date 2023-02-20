import { useRoutes } from 'react-router-dom'
import App from '../App'
import Courses from '../components/Courses/Courses'
import CreateCourse from '../components/CreateCourse/CreateCourse'
const routerList = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/course',
        element: <Courses />
      },
      {
        path: '/create',
        element: <CreateCourse />
      }
    ]
  }
]

const RenderRouter = () => useRoutes(routerList)

export default RenderRouter
