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
  try {
    const { data } = await axios.get('/auth/profile');
    return data;
  } catch (error) {
    if (error.response?.status === 401) return null;
    throw error;
  }
}

export async function logout() {
  try {
    await axios.post('/auth/logout');
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
