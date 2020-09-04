import axios from 'axios';
const baseUrl = 'http://192.168.1.150:3001/api/user';

const getUserContributions = async (googleId) => {
  const response = await axios.get(`${baseUrl}/${googleId}`);
  return response.data;
};

export default { getUserContributions };