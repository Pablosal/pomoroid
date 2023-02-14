import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import StopWatch from './components.tsx/Stopwatch';
import Topbar from './components.tsx/topbar/Topbar';
import Panel from './components.tsx/panel/Panel';
import { ButtonMessages, PanelDirections } from './utils/enums';
import Banner from './components.tsx/banner/Banner';
import TimerClock from './components.tsx/timer_clock/TimerClock';
import GeneralButton from './components.tsx/general_button/GeneralButton';
import MainContent from './components.tsx/main_content/MainContent';
import { taskContext } from './context/contexts/task_context';
import { Task } from './utils/types';
import { NewTask } from './utils/classes/Task';
import Timer from './components.tsx/Timer';

function App() {
  const { taskState, createTask, setActiveTask, toggleTask } =
    useContext(taskContext);
  const [taskTitle, setTaskTitle] = useState('');
  function createNewTask(taskTitle) {
    const newTask = new NewTask(taskTitle);
    createTask(newTask);
    if (taskState.tasks.length === 0) {
      setActiveTask(newTask.id);
    }
  }
  // const [isActive, setIsActive] = useState(false);
  // const [isPaused, setIsPaused] = useState(false);
  // function startTimer(startTime = '00:00:10') {
  //   let [hours, minutes, seconds] = startTime.split(':');
  // }
  // useEffect(() => {
  //   setIsActive(true);
  //   let interval = null;
  //   if (isActive && isPaused === false) {
  //     interval = setInterval(() => {
  //       console.log('time');
  //     }, 1000);
  //   } else {
  //     clearInterval(interval);
  //   }
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [isActive, isPaused]);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div className="App">
      <Topbar />
      <div className=" ">
        <Panel
          direction={PanelDirections.Left}
          title="Active Pomodoros"
          buttonMessage={ButtonMessages.AddPomodoro}
        />
        <MainContent />
        <Panel
          direction={PanelDirections.Rigth}
          title="Remaining Tasks"
          buttonMessage={ButtonMessages.CreateTasks}
          items={
            <div className="flex  justify-center flex-col">
              {taskState.tasks.map((task: Task) => {
                return (
                  <div
                    key={task.id}
                    className={`flex cursor-pointer ${
                      task.isMainTask
                        ? 'border-8 border-white border-solid'
                        : ' border-none hover:border-solid hover:border-slate-900 hover:border-8 '
                    }`}
                    onClick={(e) => setActiveTask(task.id)}
                  >
                    <input
                      className="mr-3"
                      type="checkbox"
                      name={task.id}
                      id={task.id}
                      defaultChecked={task.isDone}
                      checked={task.isDone}
                      onChange={(e) => {
                        toggleTask({ check: e.target.checked, id: task.id });
                      }}
                    />
                    <label
                      htmlFor={task.id}
                      className="text-lg text-white cursor-cell"
                    >
                      {task.title}
                    </label>
                  </div>
                );
              })}
            </div>
          }
        >
          <>
            <label htmlFor="taskCreator"></label>
            <input
              type="text"
              placeholder="Add your task"
              name="taskCreator"
              id="taskCreator"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  createNewTask(taskTitle);
                }
              }}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <GeneralButton
              message={ButtonMessages.CreateTasks}
              handleClick={() => createNewTask(taskTitle)}
            />
          </>
        </Panel>
      </div>
      <button onClick={() => createTask(2)}>Start</button>
      {/* {/* <StopWatch/> */}
    </div>
  );
}

export default App;
