import { pomodoroContext } from '../contexts/pomodoro_context';

const PomodoroProvider = (props) => {
  return (
    <pomodoroContext.Provider value={1}>
      {props.children}
    </pomodoroContext.Provider>
  );
};

export default PomodoroProvider;
