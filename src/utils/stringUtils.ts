import {MD5} from 'crypto-js';

import moment from 'moment';

export function splitStringByNewline(inputString) {
  return inputString.split('\n');
}

export function hashPassword(password: string): string {
  return MD5(password).toString();
}

export function formatDate(date) {
  return moment(date).format('YYYY-MM-DD');
}

export const objectToStringValues = obj => {
  const result = {};
  Object.keys(obj).forEach(key => {
    result[key] = obj[key] && obj[key].toString();
  });
  return result;
};
