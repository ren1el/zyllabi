import axios from 'axios';
const baseUrl = 'http://***REMOVED***/api/zyllabis3bucket';

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