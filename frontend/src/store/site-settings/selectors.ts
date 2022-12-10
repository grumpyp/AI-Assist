import { createSelector } from '@reduxjs/toolkit';
import { name } from './slice';
import { AppState } from '../store';

export const selectSettingsState = (state: AppState) => state[name];

export const selectDarkMode = createSelector(
  [selectSettingsState],
  (settingsState) => settingsState.darkMode
);

export const selectTheme = createSelector(
  [selectSettingsState],
  (settingsState) => settingsState.theme
);
