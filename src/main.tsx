import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PomodoroProvider from './context/providers/pomodoro_provider';
import TaskProvider from './context/providers/task_provider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskProvider>
      <PomodoroProvider>
        <App />
      </PomodoroProvider>
    </TaskProvider>
  </React.StrictMode>
);
