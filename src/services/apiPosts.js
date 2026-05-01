import axios from './axios';

export async function getPosts() {
  const { data } = await axios.get('/posts');
  return data;
}
