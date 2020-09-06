import axios from 'axios';
const baseUrl = `http://${process.env.REACT_APP_SERVER_PORT}/api/user`; //eslint-disable-line

const getUserContributions = async (googleId) => {
  const response = await axios.get(`${baseUrl}/${googleId}`);
  return response.data;
};

export default { getUserContributions };