import {createSlice} from '@reduxjs/toolkit';

interface IState {
    title: string;
}

const initialState: IState = {
    title: ''
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPageTitle: (state, action) => {
            state.title = action.payload;
        }
    }
});

export const {setPageTitle} = pageSlice.actions;

export default pageSlice.reducer;
