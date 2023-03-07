import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { queryAuthorsAll } from '../../service/users';
const initialState = {
  authorList: [],
};

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    saveAuthorList: (state, { payload }) => {
      return { authorList: payload };
    },
  },
});

const queryAuthorsAsyncThunk = createAsyncThunk('/authors/all', () => {
  return queryAuthorsAll();
});

export const queryAuthorsThunk = () => async (dispatch) => {
  const ret = await dispatch(queryAuthorsAsyncThunk());
  const { result } = ret.payload.data;
  dispatch(saveAuthorList(result));
};

export const { saveAuthorList } = authorsSlice.actions;
export default authorsSlice.reducer;
