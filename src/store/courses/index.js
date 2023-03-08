import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  queryCourseAll,
  deleteCourseById,
  addCourse,
  updateCourse,
} from '../../service/courses';

const initialState = {
  courseList: [],
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    saveCourseList: (state, { payload }) => {
      return { courseList: payload };
    },
    addCourseList: (state, { payload }) => {
      return { courseList: [...state.courseList, payload] };
    },
    updateCourseList: (state, { payload }) => {
      const { id, params } = payload;
      const ret = state.courseList.map((item) => {
        if (item.id === id) {
          item = params;
        }
        return item;
      });
      return { courseList: ret };
    },
    deleteCourse: (state, { payload }) => {
      const ret = state.courseList.filter((item) => {
        if (item.id !== payload) return item;
      });
      return { courseList: ret };
    },
  },
});

//queryCourses异步action
const queryCoursesAsyncThunk = createAsyncThunk('/courses/all', async () => {
  return queryCourseAll();
});

//汇总action
export const queryCoursesThunk = () => async (dispatch) => {
  // 调用查询action
  const ret = await dispatch(queryCoursesAsyncThunk());
  const { result } = ret.payload.data;
  // 调用保存action
  dispatch(saveCourseList(result));
};

const deleteCourseAsyncThunk = createAsyncThunk('/courses/:id', async (id) => {
  return await deleteCourseById(id);
});
export const deleteCourseThunk = (id) => async (dispatch) => {
  const ret = await dispatch(deleteCourseAsyncThunk(id));
  dispatch(deleteCourse(id));
  return ret;
};

const addCourseAsyncThunk = createAsyncThunk('/courses/add', async (params) => {
  return await addCourse(params);
});
export const addCourseThunk = (params) => async (dispatch) => {
  const ret = await dispatch(addCourseAsyncThunk(params));
  dispatch(addCourseList(params));
  return ret;
};

const updateCourseAsyncThunk = createAsyncThunk(
  '/courses/:id',
  async ({ courseId, values }) => {
    return await updateCourse(courseId, values);
  }
);
export const updateCourseThunk = (paramsObj) => async (dispatch) => {
  const { courseId, values } = paramsObj;
  const ret = await dispatch(updateCourseAsyncThunk(paramsObj));
  dispatch(updateCourseList(courseId, values));
  return ret;
};

export const { saveCourseList, deleteCourse, addCourseList, updateCourseList } =
  courseSlice.actions;
export default courseSlice.reducer;
