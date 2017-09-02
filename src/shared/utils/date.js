import moment from 'moment';

moment.locale('en-US');

const formatDate = date => format => moment(date).format(format);
const getSeconds = date => parseInt(formatDate(new Date(date))('X'), 10);

export default {
  getSeconds,
  getDateBeforeYears: years => moment().add(-parseInt(years, 10), 'years').format('L')
};
