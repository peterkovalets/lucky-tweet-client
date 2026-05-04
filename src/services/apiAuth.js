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
  const { data } = await axios.get('/auth/profile');
  return data;
}
