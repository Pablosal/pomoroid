import { useReducer } from 'react';
import { PomodoroContextState } from '../../utils/types';
import { pomodoroContext } from '../contexts/pomodoro_context';
import { pomodoroReducer } from '../reducers/pomodoro_reducer';

const initialState: PomodoroContextState = {
  activePomodoros: [],
  inactivePomodoros: [],
  allDone: false,
};

const PomodoroProvider = (props) => {
  const [pomodoroState, dispatch] = useReducer(pomodoroReducer, initialState);

  function createPomodoro(pomodoro) {}
  function startPomodoro(id) {}
  function getPomodoro(id) {}
  function modifyPomodoro(id) {}
  function addToActivePomodoros(id) {}
  function addToInactivePomodoros(id) {}

  return (
    <pomodoroContext.Provider value={1}>
      {props.children}
    </pomodoroContext.Provider>
  );
};

export default PomodoroProvider;
