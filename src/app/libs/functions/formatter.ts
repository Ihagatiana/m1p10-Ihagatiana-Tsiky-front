import * as moment from 'moment';

export function humanizeDate(date: Date) {
  return moment(date).format('DD/MM/YYYY');
}
