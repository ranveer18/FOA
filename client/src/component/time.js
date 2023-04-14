function getTimePlus(hoursToAdd, minutesToAdd, secondsToAdd) {
  const now = new Date();
  now.setSeconds(now.getSeconds() + secondsToAdd);
  now.setMinutes(now.getMinutes() + minutesToAdd);
  now.setHours(now.getHours() + hoursToAdd);

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  if (hours >= 24) {
    hours -= 24;
  }
  const timeString = `${hours}:${minutes}:${seconds}`;

  return timeString;
}

const timePlus = getTimePlus(0, 120, 0);
console.log(timePlus);
