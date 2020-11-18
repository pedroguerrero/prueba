import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:8989/login', {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await axios.post('http://localhost:8989/register', {
      name,
      email,
      password,
    });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const registerAndLogin = async (name, email, password) => {
  try {
    await register(name, email, password);
    const loginData = await login(email, password);
    localStorage.setItem('token', loginData.access_token);
  } catch (err) {
    throw new Error(err.message);
  }
};
