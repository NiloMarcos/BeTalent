export function formatDate(dateInput: string) {
  const dateObj = new Date(dateInput);

  if (isNaN(dateObj.getTime())) return "Invalid date";

  const day = String(dateObj.getDate()).padStart(2, "0");

  const month = String(dateObj.getMonth() + 1).padStart(2, "0");

  const year = dateObj.getFullYear();

  return `${day}/${month}/${year}`;
}