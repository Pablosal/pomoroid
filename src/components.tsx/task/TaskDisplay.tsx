import * as React from 'react';
import { taskContext } from '../../context/contexts/task_context';
interface TaskProps {
  nameOfTask: string;
  isDone?: boolean;
  taskId: string | null;
}
const TaskDisplay = ({ nameOfTask, taskId, isDone }: TaskProps) => {
  const { toggleTask } = React.useContext(taskContext);
  return (
    <div className="flex justify-start ml-2 mb-2">
      <input
        type="checkbox"
        name={nameOfTask}
        id={nameOfTask}
        onChange={(e) => {
          toggleTask({ check: e.target.checked, id: taskId });
        }}
        checked={isDone}
        defaultChecked={isDone}
      />
      <label
        className={`  ml-2 ${isDone ? `line-through` : 'no-underline'} `}
        htmlFor={nameOfTask}
      >
        {nameOfTask}
      </label>
    </div>
  );
};

export default TaskDisplay;
