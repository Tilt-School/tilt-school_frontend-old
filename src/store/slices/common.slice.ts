import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeEnum } from 'src/types/enum';

interface ICommonSliceState {
  isSidebarMenuActive: boolean;
  activeTheme: ThemeEnum;
}

const initialState = {
  isSidebarMenuActive: false,
  activeTheme: 'dark',
} as ICommonSliceState;

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    toggleTheme(state, action: PayloadAction<ThemeEnum>) {
      state.activeTheme = action.payload;
    },
    openSidebarMenu(state) {
      state.isSidebarMenuActive = true;
    },
    closeSidebarMenu(state) {
      state.isSidebarMenuActive = false;
    },
  },
});

export const commonReducer = commonSlice.reducer;
export const { toggleTheme, openSidebarMenu, closeSidebarMenu } = commonSlice.actions;
