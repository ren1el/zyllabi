import axios from 'axios';
const baseUrl = `/api/user`; //eslint-disable-line

const getUserContributions = async (googleId) => {
  const response = await axios.get(`${baseUrl}/${googleId}`);
  return response.data;
};

export default { getUserContributions };