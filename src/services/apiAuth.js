import axios from './axios';

export async function register(user) {
  const { data } = await axios.post('/auth/register', user);
  return data;
}
