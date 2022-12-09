import {createSlice} from "@reduxjs/toolkit";

export interface SiteSettingsState {
  darkMode: boolean;
  theme: string;
}

const initialState: SiteSettingsState = {
  darkMode: false,
  theme: "light"
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDarkMode: state => ({
      darkMode: !state.darkMode,
      theme: state.darkMode ? "light" : "dark"
    })
  },
});

export const {reducer, name} = settingsSlice;

export const {toggleDarkMode} = settingsSlice.actions;
