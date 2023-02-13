import { POMODORO_OPERATIONS } from '../contextypes';

export const pomodoroReducer = (state, action) => {
  switch (action.type) {
    case POMODORO_OPERATIONS.CREATE_POMODORO:
      break;

    default:
      return state;
  }
};
