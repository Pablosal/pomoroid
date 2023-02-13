import React, { useState } from 'react';
import useStopWatch from '../utils/hooks/useStopWatch';
import ControlButtons from './ControlButtons';
import Timer from './Timer';

function StopWatch() {
  const [
    handlePauseResume,
    handleReset,
    handleStart,
    time,
    isActive,
    isPaused,
  ] = useStopWatch();

  return (
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}

export default StopWatch;
