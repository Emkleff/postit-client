import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://postit-emkleff-api.onrender.com/api`,
});