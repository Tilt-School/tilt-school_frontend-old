import { createSlice } from '@reduxjs/toolkit';

interface IAuthSliceState {
  isAuthenticated: boolean;
  // TODO: change this to real data
  user: Record<string, unknown> | null;
}

const initialState = {
  isAuthenticated: false,
  user: null,
} as IAuthSliceState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
// export const {} = authSlice.actions;
