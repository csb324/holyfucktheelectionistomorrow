import { RESTART_COUNTER, INCREMENT_BY, SET_TOPIC, SET_ACTION } from '../constants/ActionTypes';
import { IDEAS_COUNT } from '../constants/IdeasConstants';

// this prevents the counter getting somehow ahead of the actual list of ideas
function addToCounter(counter, int) {
  return Math.min(counter + int, IDEAS_COUNT - 1);
}

export default function counter(state = 0, action) {
  switch (action.type) {

  case SET_TOPIC:
    return addToCounter(state, 1)

  case SET_ACTION:
    return addToCounter(state, 1)

  case RESTART_COUNTER:
  	return 0;

  case INCREMENT_BY:
    return addToCounter(state, action.payload)

  default:
    return state;
  }
}
