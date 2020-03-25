// eslint-disable-next-line import/no-duplicates
import { format, subYears } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import { ptBR } from 'date-fns/locale';

export function formatTime(time: number) {
  const dateString = String.prototype.concat(time.toString(), '000');
  const dateTimestamp = Number(dateString);

  return format(new Date(dateTimestamp), 'dd-MMM', {
    locale: ptBR,
  });
}

export function formatFullTime(time: React.ReactText) {
  const dateString = String.prototype.concat(time.toString(), '000');
  const dateTimestamp = Number(dateString);

  return format(new Date(dateTimestamp), 'PPPP', {
    locale: ptBR,
  });
}

export function timestampDate(time: number) {
  return new Date(time);
}

export function nowSubYear(years: number) {
  return new Date(subYears(new Date(), years)).getTime().toString();
}
