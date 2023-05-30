import { createAction, createReducer } from '@reduxjs/toolkit';

const save = createAction('info/save');
const clear = createAction('info/clear');

const initialState = 'infoinfo111';

export const setInfo = createReducer(initialState, (builder) => {
  builder
    .addCase(save, (_, action) => action.payload)
    .addCase(clear, () => initialState);
});
