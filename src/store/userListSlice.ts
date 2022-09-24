import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {usersMain} from '../helper/apiService';

export const STATUS = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const usersList = createSlice({
  name: 'user',
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setUsers(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const {setUsers, setStatus} = usersList.actions;

export default usersList.reducer;

// Thunks
export function fetchUsers(number) {
  return async function fetchUsersThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await usersMain.getUsers(number);
      dispatch(setUsers(response.data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      console.log(error.message);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
