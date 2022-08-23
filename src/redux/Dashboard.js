import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: 'Dashboard',
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setTabTitle: (state, action) => {
            state.title = action.payload;
        }
    }
})

// Action export:
export const { setTabTitle } = dashboardSlice.actions;

// State export
export const selectTabTitle = (state) => state.dashboard.title;

// Reducer function export:
export default dashboardSlice.reducer;

