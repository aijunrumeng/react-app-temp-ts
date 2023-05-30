import { configureStore } from '@reduxjs/toolkit';

import { setInfo } from './reducers';

const store = configureStore({
  reducer: {
    info: setInfo,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
