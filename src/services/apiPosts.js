import axios from './axios';

export async function getPosts() {
  const { data } = await axios.get('/posts');
  return data;
}

export async function createPost(post) {
  try {
    const { data } = await axios.post('/posts', post);
    return data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
