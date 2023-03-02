import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserList: (state, { payload }) => ({ userList: payload }),
    // eslint-disable-next-line no-unused-vars
    logOut: (state, { payload }) => ({ userList: [] }),
  },
});

export const { saveUserList, logOut } = userSlice.actions;
export default userSlice.reducer;
