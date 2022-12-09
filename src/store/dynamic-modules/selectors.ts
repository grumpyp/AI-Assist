import { createSelector } from '@reduxjs/toolkit';
import { name } from './slice';
import { AppState } from '../store';

export const selectDynamicModuleState = (state: AppState) => state[name];

export const selectModuleById = createSelector(
  [selectDynamicModuleState],
  (dynamicModuleState) =>
    <T>(id: string) =>
      dynamicModuleState[id] as T
);
