import { legacy_createStore as createStore, combineReducers } from 'redux';

import { setInfo } from './reducers';

const rootReducer = combineReducers({
  info: setInfo,
});

const store = createStore(rootReducer);

if (process.env.NODE_ENV === 'development') {
  (window as any).store = store;
}

export default store;
