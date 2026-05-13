import axios from './axios';

export async function register(user) {
  try {
    const { data } = await axios.post('/auth/register', user);
    return data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function login(user) {
  try {
    const { data } = await axios.post('/auth/login', user);
    return data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function getCurrentUser() {
  const { data } = await axios.get('/auth/profile');
  return data;
}
