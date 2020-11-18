import axios from 'axios';

const getToken = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('token not found');
  }

  return token;
};

export const addUrl = async (url) => {
  const token = getToken();

  try {
    const response = await axios.post(
      `http://localhost:8989/shorten?url=${url}`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getDomains = async () => {
  const token = getToken();
  try {
    const { data } = await axios.get('http://localhost:8989/domain', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
