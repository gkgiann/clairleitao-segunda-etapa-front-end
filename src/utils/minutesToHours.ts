export function minutesToHours(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${String(hours)}h ${String(mins).padStart(2, "0")}m`;
}
