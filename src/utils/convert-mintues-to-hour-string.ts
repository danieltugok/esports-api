export function convertMinutesToHourString(minutesAmount: number){
  const hours = Math.floor(minutesAmount / 60);
  const remainingMinutes = minutesAmount % 60;

  return `${String(hours).padStart(2,'0')}:${String(remainingMinutes).padStart(2,'0')}`;
}