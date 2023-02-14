import * as React from 'react';
import { useTimer } from 'react-timer-hook';

const TimerClock = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
    autoStart: false,
  });
  const formatSingleItem = (x: number, left: boolean) =>
    x < 10 ? `${left ? '0' + x : x + '0'}` : x;

  console.log(isRunning);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{ fontSize: '100px' }}>
        <span>{formatSingleItem(hours, true)}</span>:
        <span>{formatSingleItem(minutes, false)}</span>:
        <span>{formatSingleItem(seconds, false)}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 600);
          restart(time, false);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default TimerClock;
