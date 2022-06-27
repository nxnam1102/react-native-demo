import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {TestService} from '../../http_service/test_service';

export interface DemoState {
  data: any[];
}

const initialState: DemoState = {
  data: [],
};

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    getData: (state: DemoState) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = [];
    },
    resetData: (state: DemoState) => {
      state.data = [];
    },
    setState: (state: DemoState, action: PayloadAction<any>) => {
      return {...state, ...action.payload};
    },
  },
});

// Action creators are generated for each case reducer function
export const {getData, resetData, setState} = demoSlice.actions;
export const fetchData = createAsyncThunk(
  'demo/fetchData',
  async (params: string, {dispatch}) => {
    let response = await TestService.GetDataDemo();
    dispatch(setState({data: response}));
  },
);

export const demoReducer = demoSlice.reducer;
