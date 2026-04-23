import axios from './axios';

export async function getPosts() {
  try {
    const { data } = await axios.get('/posts');
    return data;
  } catch {
    throw new Error("Couldn't retrieve posts!");
  }
}
