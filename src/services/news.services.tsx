import axios, { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

interface IToken {
  [key: string]: string;
}

export const getNewService = async (context: GetServerSidePropsContext) => {
  try {
    const cookies = parseCookies(context);
    const token = cookies.token;
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response: AxiosResponse = await axios.get('http://localhost:4000/news');
      return response.data;
    } else {
      return null;
    }
  } catch (err: unknown) {
    console.log(err);
  }
}

export const getNewServiceById = async () => {
  try {
    const token: IToken = parseCookies()
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const response: AxiosResponse = await axios.get('http://localhost:4000/news');
      return response.data;
    }
  } catch (err) {
    throw new Error('Failed to fetch news detail');
  }
}

export const getNewDetailService = async (newsId: string | undefined) => {
  try {
    const response: AxiosResponse = await axios.get(`http://localhost:4000/news/${newsId}`);
    return response.data;
  } catch (err: unknown) {
    throw new Error('Failed to fetch news detail');
  }
}