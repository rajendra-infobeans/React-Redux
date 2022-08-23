import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsersAsync = createAsyncThunk('users/getUsersData', async () => {
    const usesGetResponse = await axios.get('https://dummyjson.com/users?limit=10').then((response) => response.data);
    console.log(usesGetResponse);
    return usesGetResponse;
});

export const createUserAsync = createAsyncThunk('users/createUser', async (userData) => {
 const userCreateResponse = await axios.post('https://dummyjson.com/users/add', userData)
 .then((response) => response.data);
 console.log(userCreateResponse);
 return userCreateResponse;
});
const initialState = {
    usersList: {
        users: []
    },
    status: 'idle',
}

export const UsersSlice  = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [getUsersAsync.pending]: (state) => {
          state.status = 'loading';
        },
        [getUsersAsync.fulfilled]: (state, action) => {
          state.status = 'idle';
          state.usersList = action.payload;
        },
        [getUsersAsync.rejected]: (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        }
    }
})

export const selectUsers = (state) => state.users.usersList;
export const selectUserListStatus = (state) => state.user.state;

export default UsersSlice.reducer;