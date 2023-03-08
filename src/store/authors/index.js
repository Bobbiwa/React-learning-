import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { queryAuthorsAll, addAuthor } from '../../service/author';
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
    addAuthorList: (state, { payload }) => {
      return { authorList: [...state.authorList, payload] };
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

const addAuthorAsyncThunk = createAsyncThunk('/authors/add', async (params) => {
  return await addAuthor(params);
});

export const addAuthorThunk = (params) => async (dispatch) => {
  const ret = await dispatch(addAuthorAsyncThunk(params));
  dispatch(addAuthorList(params));
  return ret;
};

export const { saveAuthorList, addAuthorList } = authorsSlice.actions;
export default authorsSlice.reducer;
