import axios from 'axios';
const baseUrl = 'http://***REMOVED***/api/zyllabis3bucket';

const getSignedRequest = async (file) => {
  try {
    const fileParams = {
      fileName: file.name,
      fileType: file.type
    };
    const response = await axios.post(`${baseUrl}/sign-s3`, fileParams);
    return response.data;
  } catch(error) {
    console.log(error.message);
  }
};

const putSyllabus = async (signedRequest, file) => {
  try {
    var options = {
      headers: {
        'Content-Type': file.type
      }
    };
    const response = await axios.put(signedRequest, file, options);
    return response.data;
  } catch(error) {
    console.log(error.message);
  }
};

export default { getSignedRequest, putSyllabus };