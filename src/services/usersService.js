import axios from 'axios';
const baseUrl = 'http://***REMOVED***/api/user';

const getUserContributions = async (googleId) => {
  const response = await axios.get(`${baseUrl}/${googleId}`);
  return response.data;
};

export default { getUserContributions };