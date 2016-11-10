import { SET_TOPIC, SET_ACTION, RESTART_COUNTER } from '../constants/ActionTypes';

const initial = {
	topic: false,
	action: false
}

export default function ideas(state = initial, action) {
  switch (action.type) {

  case SET_TOPIC:
  	return {action: state.action, topic: action.payload};

  case SET_ACTION:
  	return {action: action.payload, topic: state.topic};

  case RESTART_COUNTER:
  	return initial;

  default:
    return state;
  }
}
