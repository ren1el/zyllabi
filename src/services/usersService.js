import axios from 'axios';
let baseUrl = '/api/user';

if (process.env.NODE_ENV === 'development') { //eslint-disable-line
  baseUrl = 'http://localhost:3001/api/user';
} 

const getUserContributions = async (googleId) => {
  const response = await axios.get(`${baseUrl}/${googleId}`);
  return response.data;
};

export default { getUserContributions };