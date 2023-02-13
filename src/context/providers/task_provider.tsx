import React from 'react';
import { Task } from '../../utils/types';
import { taskContext } from '../contexts/task_context';
import { TASK_OPERATIONS } from '../contextypes';
import { taskReducer } from '../reducers/task_reducer';
// TaskState

const initialState = {
  tasks: [],
  allDone: false,
  activeTask: null,
};
const TaskProvider = (props) => {
  const [taskState, dispatch] = React.useReducer(taskReducer, initialState);
  React.useEffect(() => {
    // console.log('STATES', taskState);
  }, [taskState]);
  function createTask(task: Task) {
    dispatch({ type: TASK_OPERATIONS.CREATE_TASK, payload: task });
    return;
  }
  function deleteTask(taskId) {
    dispatch({ type: TASK_OPERATIONS.DELETE_TASK, taskId });
    return;
  }
  function modifyTask(taskId, task) {
    dispatch({ type: TASK_OPERATIONS.MODIFY_TASK, task, taskId });
    return;
  }
  function toggleTask(task) {
    dispatch({ type: TASK_OPERATIONS.TOGGLE_TASK, payload: task });
    return;
  }
  function setActiveTask(task) {
    dispatch({ type: TASK_OPERATIONS.SET_ACTIVE_TASK, task });
    return;
  }
  const returnValues = {
    taskState,
    createTask,
    deleteTask,
    modifyTask,
    setActiveTask,
    toggleTask,
  };
  return (
    <taskContext.Provider value={returnValues}>
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskProvider;
