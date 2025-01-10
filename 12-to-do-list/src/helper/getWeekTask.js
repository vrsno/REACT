import { getMonthName } from "./getMonthName";
import { getNameDay } from "./getNameDate";

export const getWeekTasks = (tasks) => {
  let weekDays = [];
  let today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;

  let numWeek = today.getDay();
  let timeDay = today.getTime();
  let weekOne = new Date(timeDay - numWeek * oneDay);
  //console.log(numWeek);

  for (let i = 0; i < 7; i++) {
    const newDate = new Date(weekOne.getTime() + i * oneDay);
    const dateString = new Date(weekOne.getTime() + i * oneDay).toUTCString();

    const day = {
      id: crypto.randomUUID(),
      date: dateString,
      day: getNameDay(newDate),
      month: getMonthName(newDate),
      numDay: newDate.getDate(),
      tasks: [],
    };
    weekDays.push(day);
  }
  for (let j = 0; j < weekDays.length; j++) {
    for (let k = 0; k < tasks.length; k++) {
      const date1 = new Date(weekDays[j].date).setHours(0, 0, 0, 0);
      const date2 = new Date(weekDays[k].date).setHours(0, 0, 0, 0);
      if (date1 === date2) {
        weekDays[j].tasks.push(tasks[k]);
      }
    }
  }
  return weekDays;
};
