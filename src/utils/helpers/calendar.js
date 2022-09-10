export function getFirstDay(currentDate) {
  const date = new Date(currentDate);
  date.setDate(1);
  const firstDay = date.getDay();
  return firstDay;
}

export function daysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return new Date(year, month, 0).getDate();
}

export function getFirstWeek(currentDate) {
  const date = new Date(currentDate);
  const firstDay = getFirstDay(date);
  let firstWeek = new Array(7).fill(0);

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const prevMonth = new Date(currentYear, currentMonth - 1);

  firstWeek[firstDay] = 1;
  firstWeek = firstWeek.map((day, index) => {
    if (index < firstDay) {
      return daysInMonth(prevMonth) - (firstDay - index - 1);
    }
    if (index > firstDay) {
      return 1 + (index - firstDay);
    }
    return day;
  });

  return firstWeek;
}

export function getCalendarDays(date) {
  const NUMBER_OF_WEEKS = 6;
  const firstWeek = getFirstWeek(date);

  let calendarDays = [...firstWeek];
  for (let i = 0; i < 7 * (NUMBER_OF_WEEKS - 1); i++) {
    calendarDays.push(firstWeek[6] + i + 1);
  }

  calendarDays = calendarDays.map((day, index) => {
    if (day > daysInMonth(date) && index > 6) {
      return day - daysInMonth(date);
    }
    return day;
  });
  return calendarDays;
}

export function getDateString(date) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${weekday[date.getDay()]}, ${
    months[date.getMonth()]
  }. ${date.getDate()}`;
}

export function getMonthString(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function getMonthFromIndex(curr, index) {
  if (index <= -23) {
    return { value: curr - 1, increment: -1 };
  }
  if (index >= 29) {
    return { value: curr + 1, increment: 1 };
  }
  return { value: curr, increment: 0 };
}
