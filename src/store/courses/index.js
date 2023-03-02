import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { queryCourseAll } from '../../service/courses';

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
    updateCourseList: (state, { payload }) => {
      return { courseList:[...state.courseList, payload] };
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

export const { saveCourseList, deleteCourse, updateCourseList } =
  courseSlice.actions;
export default courseSlice.reducer;
