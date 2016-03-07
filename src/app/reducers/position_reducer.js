import { Map } from 'immutable';
import { SET_POSITION } from '../actions/position';

export default (state = Map(), action) => {
  switch (action.type) {
  case SET_POSITION:
    return setPosition(state, action.data);
  default:
    return state;
  }
};


function setPosition(state, data) {
  return state.set('lat', data.lat).set('long', data.long);
}
