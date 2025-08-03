const monthNames = [
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

export function getCurrentFormattedDate() {
  const now = new Date();

  // Get the month, day, and year
  const month = monthNames[now.getMonth()];
  const day = String(now.getDate()).padStart(2, "0"); // Get day and pad with zero if needed
  const year = now.getFullYear();

  // Return formatted date
  return `${month}, ${day}, ${year}`;
}
