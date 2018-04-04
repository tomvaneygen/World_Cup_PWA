import moment from 'moment-timezone';

export default function(timeInUTC, format) {
  return moment
    .tz(timeInUTC, 'Etc/GMT')
    .tz(moment.tz.guess())
    .format(format);
}