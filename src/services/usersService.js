import axios from 'axios';
<<<<<<< HEAD
const baseUrl = `/api/user`; //eslint-disable-line
=======
let baseUrl = '/api/user';

if (process.env.NODE_ENV === 'development') { //eslint-disable-line
  baseUrl = 'http://localhost:3001/api/user';
} 
>>>>>>> parent of f61fa4d... Change development routes

const getUserContributions = async (googleId) => {
  const response = await axios.get(`${baseUrl}/${googleId}`);
  return response.data;
};

export default { getUserContributions };