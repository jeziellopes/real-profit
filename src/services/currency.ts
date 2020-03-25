import { fromUnixTime } from 'date-fns';

export function formatTime(time: number) {
  return fromUnixTime(time);
}

