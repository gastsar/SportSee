// config.js

export let useApi = true;
export const apiUrl = 'http://localhost:3000'; // Mon endPoind API

export const toggleApiUsage = () => {
  useApi = !useApi;
};
