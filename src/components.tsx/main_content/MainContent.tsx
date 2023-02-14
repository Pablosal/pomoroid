import * as React from 'react';
import { ButtonMessages, PreparationMesagge } from '../../utils/enums';
import { formatClock } from '../../utils/helpers/clockFormat';
import ActiveTaskContainer from '../active_task_container/ActiveTaskContainer';
import Banner from '../banner/Banner';
import GeneralButton from '../general_button/GeneralButton';
import TimerClock from '../timer_clock/TimerClock';

const MainContent = (props) => {
  return (
    <main className="flex justify-start items-center flex-col m-h-screen my-8">
      <Banner message={PreparationMesagge.Chill}></Banner>
      <TimerClock expiryTimestamp={formatClock('02:30:25')} />
      <ActiveTaskContainer />
      <GeneralButton message={ButtonMessages.AddPomodoro}></GeneralButton>
      <GeneralButton message={ButtonMessages.StartMusic}></GeneralButton>
    </main>
  );
};

export default MainContent;
