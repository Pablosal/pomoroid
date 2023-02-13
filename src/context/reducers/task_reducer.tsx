import { Task } from '../../utils/types';
import { TASK_OPERATIONS } from '../contextypes';
const initialState: taskState = {
  tasks: [],
  allDone: false,
  activeTask: null,
};

type taskState = {
  tasks: Array<Task>;
  allDone: boolean;
  activeTask: Task | null;
};
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_OPERATIONS.CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TASK_OPERATIONS.TOGGLE_TASK:
      const modified = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.isDone = action.payload.check;
        }
        return task;
      });

      return {
        ...state,
        tasks: modified,
        activeTask:
          state.activeTask.id === action.payload.id
            ? { ...state.activeTask, isDone: action.payload.check }
            : state.activeTask,
      };
    case TASK_OPERATIONS.MODIFY_TASK:
      break;
    case TASK_OPERATIONS.DELETE_TASK:
      break;
    case TASK_OPERATIONS.SET_ACTIVE_TASK:
      const activeTask = state.tasks.find((task) => task.id === action.task);
      activeTask.isMainTask = true;
      console.log({ activeTask });
      const normalizedTasks = state.tasks.map((task) => {
        if (task.id !== action.task) {
          task.isMainTask = false;
          console.log({ task });
          return task;
        }
        return activeTask;
      });
      return {
        ...state,
        tasks: normalizedTasks,
        activeTask: activeTask
          ? activeTask
          : { isDone: true, title: 'No task selected', id: 'whati90283j3' },
      };
      return state;
    default:
      return state;
  }
};
