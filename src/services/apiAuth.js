import axios from './axios';

export async function register(user) {
  const { data } = await axios.post('/auth/register', user);
  return data;
}

export async function login(user) {
  const { data } = await axios.post('/auth/login', user);
  return data;
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
  await axios.post('/auth/logout');
}
