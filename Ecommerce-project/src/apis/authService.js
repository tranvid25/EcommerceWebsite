import axiosClient from './axiosClient';

const register = async (data) => {
  return await axiosClient.post('/register', data);
};
const signIn = async (body) => {
  return await axiosClient.post('/login', body);
};
export { register, signIn };
