import { Map } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import positionReducer from './reducers/position_reducer';
import thunk from 'redux-thunk';

const apiMiddleware = store => next => action => {
  console.log(`dispatching ${action.type}`)
  next(action);
  console.log(store.getState());
}


export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(
    apiMiddleware,
    thunk
  )(createStore);

  const initialState = Map();

  const store = createStoreWithMiddleware(positionReducer, initialState);

  return store;
}
