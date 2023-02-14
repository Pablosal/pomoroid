export const formatClock = (formatTime) => {
    const [hours, minutes, seconds] = formatTime.split(':');
    const totalTime =
        Number(hours * 3600) + Number(minutes * 60) + Number(seconds);
    const time = new Date();
    time.setSeconds(time.getSeconds() + totalTime);
    return time;
};
