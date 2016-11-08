import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESTART_COUNTER, ALREADY_VOTED } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function restart() {
  return {
    type: RESTART_COUNTER
  };
}

export function alreadyVoted() {
	return {
		type: ALREADY_VOTED
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
