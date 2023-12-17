type FormatDateOptions = {
  timeIncluded?: boolean;
  endDate?: Date;
  full?: boolean;
};

export function formatDate(
  startDate: Date,
  options: FormatDateOptions
): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const zeroPad = (num: number) => String(num).padStart(2, "0");
  const startTime = `${zeroPad(startDate.getHours())}:${zeroPad(
    startDate.getMinutes()
  )}`;

  const dayName = options.full
    ? days[startDate.getDay()]
    : shortDays[startDate.getDay()];
  const dayOfMonth = startDate.getDate();
  const monthName = options.full
    ? months[startDate.getMonth()]
    : shortMonths[startDate.getMonth()];

  if (options.endDate) {
    const durationInHours =
      (options.endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);
    if (durationInHours < 24 && durationInHours > 0) {
      const endTime = `${zeroPad(options.endDate.getHours())}:${zeroPad(
        options.endDate.getMinutes()
      )}`;
      return `${
        options.timeIncluded ? `${startTime} - ${endTime},` : ""
      } ${dayName} ${dayOfMonth} ${monthName}`;
    }
  }

  return `${
    options.timeIncluded ? startTime : ""
  } ${dayName} ${dayOfMonth} ${monthName}`;
}
