import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import mapReducer from './reducers/map-reducers';

const reducers = combineReducers({
  map: mapReducer
})
const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
