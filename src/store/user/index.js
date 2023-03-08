import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { queryRole } from '../../service/user';
import { logout } from '../../service/login';
import { setAuth } from '../../utils/token';
const initialState = {
  userList: [],
  isAdmin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserList: (state, { payload }) => ({ ...state, userList: payload }),
    // eslint-disable-next-line no-unused-vars
    logOut: (state, { payload }) => ({ ...state, userList: [] }),
    saveIsAdmin: (state, { payload }) => ({ ...state, isAdmin: payload }),
  },
});

const queryIsAdminAsyncThunk = createAsyncThunk('/users/me', () => {
  return queryRole();
});

export const queryIsAdminThunk = () => async (dispatch) => {
  const ret = await dispatch(queryIsAdminAsyncThunk());
  const { role } = ret.payload.data.result;
  const isAdmin = role === 'admin' ? true : false;
  setAuth(isAdmin);
  dispatch(saveIsAdmin(isAdmin));
};

const logoutAsyncThunk = createAsyncThunk('/logout', () => {
  return logout();
});

export const logoutThunk = () => async (dispatch) => {
  const ret = await dispatch(logoutAsyncThunk());
  dispatch(logOut());
  return ret;
};

export const { saveUserList, logOut, saveIsAdmin } = userSlice.actions;
export default userSlice.reducer;
