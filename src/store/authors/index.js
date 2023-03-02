import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authorList: [],
};

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    saveAuthorList: (state, { payload }) => {
      return payload;
    },
  },
});

export const { saveAuthorList } = authorsSlice.actions;
export default authorsSlice.reducer;
