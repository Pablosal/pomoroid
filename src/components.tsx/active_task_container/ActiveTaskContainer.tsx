import * as React from 'react';
import { taskContext } from '../../context/contexts/task_context';
import { Task } from '../../utils/types';
import TaskDisplay from '../task/TaskDisplay';

const ActiveTaskContainer = () => {
  const {
    taskState: { activeTask },
  } = React.useContext(taskContext);
  return (
    <div>
      <h2>¡Active Task!</h2>
      {activeTask ? (
        <TaskDisplay
          taskId={activeTask?.id ?? 2}
          nameOfTask={activeTask?.title || 'No active task found'}
          isDone={activeTask?.isDone}
        />
      ) : (
        <h2>No active tasks, create a task in the panel to the right</h2>
      )}
    </div>
  );
};

export default ActiveTaskContainer;
