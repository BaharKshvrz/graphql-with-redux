import { createSlice } from "@reduxjs/toolkit"
import {IHomePageState} from './types';

const initialState: IHomePageState = {
    animePage: null,
}

const HomePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
       setAnimatePage(state, action) {
          state.animePage = action.payload;
       }
    }
});


export const { setAnimatePage } = HomePageSlice.actions;
export default HomePageSlice.reducer;
