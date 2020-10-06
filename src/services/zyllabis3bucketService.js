import axios from 'axios';
<<<<<<< HEAD
const baseUrl = `/api/zyllabis3bucket`; //eslint-disable-line
=======
let baseUrl = '/api/zyllabis3bucket';

if (process.env.NODE_ENV === 'development') { //eslint-disable-line
  baseUrl = 'http://localhost:3001/api/zyllabis3bucket';
} 
>>>>>>> parent of f61fa4d... Change development routes

const getSignedRequest = async (file) => {
  const fileParams = {
    fileName: file.name,
    fileType: file.type
  };
  const response = await axios.post(`${baseUrl}/sign-s3`, fileParams);
  return response.data;
};

const putSyllabus = async (signedRequest, file) => {
  var options = {
    headers: {
      'Content-Type': file.type
    }
  };
  const response = await axios.put(signedRequest, file, options);
  return response.data;
};

export default { getSignedRequest, putSyllabus };