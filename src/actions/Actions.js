import { RESTART_COUNTER, INCREMENT_BY, SET_TOPIC, SET_ACTION } from '../constants/ActionTypes';

export function restart() {
  return {
    type: RESTART_COUNTER
  };
}

export function incrementBy(number) {
  return {
    type: INCREMENT_BY,
    payload: number
  }
}

export function setTopic(topic) {
  return {
    type: SET_TOPIC,
    payload: topic
  }
}

export function setAction(action) {
  return {
    type: SET_ACTION,
    payload: action
  }
}


// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// }

// export function incrementAsync() {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, 1000);
//   };
// }
