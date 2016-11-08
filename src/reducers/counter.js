import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESTART_COUNTER, ALREADY_VOTED } from '../constants/ActionTypes';
import { IDEAS_COUNT } from '../constants/IdeasConstants';

export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return Math.min(state + 1, IDEAS_COUNT - 1);

  case DECREMENT_COUNTER:
  	return Math.max(state - 1, 0);

  case RESTART_COUNTER:
  	return 0;
  	
  case ALREADY_VOTED: 
    return 4;

  default:
    return state;
  }
}
