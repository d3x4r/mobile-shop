/* eslint-disable import/prefer-default-export */
import phones from './phones';

const fetchPhones = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(phones), 1500);
  });
};

export { fetchPhones };
