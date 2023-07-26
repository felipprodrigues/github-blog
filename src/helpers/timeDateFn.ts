import { parseISO, differenceInDays } from "date-fns";

export function handleTimeDate(dateParam: string) {
  const now = new Date();
  const parsedPostDate = parseISO(dateParam);
  const daysDifference = differenceInDays(now, parsedPostDate);

  return daysDifference;
}
