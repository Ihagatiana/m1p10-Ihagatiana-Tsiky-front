import * as moment from 'moment';

export function humanizeDate(date: Date) {
  return moment(date).format('DD/MM/YYYY');
}

export function formatNumberForDisplay(value: number | string) {
  const str = value.toString();
  const parts = str.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
}
