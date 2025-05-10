export default function formatDate(date: string) {
  const newDate = date
    .slice(0, 10)
    .replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");

  return newDate;
}
