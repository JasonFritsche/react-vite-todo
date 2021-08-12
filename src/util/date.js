const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formattedDate = (dateArg) => {
  const dateToBeFormatted = new Date(dateArg);
  const month = months[dateToBeFormatted.getMonth()];
  const day = days[dateToBeFormatted.getDay()];
  const fdate = dateToBeFormatted.getDate();
  return `${day}, ${month} ${fdate}`;
};

export { formattedDate };
