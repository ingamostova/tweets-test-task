import axios from 'axios';

axios.defaults.baseURL = 'https://63f2345c4f17278c9a226867.mockapi.io';

export const fetchTweets = async () => {
  const res = await axios.get('/users');
  return res.data;
};
