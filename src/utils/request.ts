import axios from 'axios';

const instance = axios.create({ timeout: 1000 * 20 });

instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';

instance.interceptors.request.use(
  (config) => {
    const { headers } = config;
    if (headers && !headers.Authorization) {
      const token = localStorage.getItem('token');
      token && (headers.Authorization = token);
    }

    return config;
  },
  (error) => {
    throw new Error(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const { code } = response.data;
    if (code === 401) {
      localStorage.removeItem('token');
    }
    return response;
  },
  (error) => {
    throw new Error(error);
  }
);

export const request = (url: string, options?: { [key: string]: any }) => {
  return instance.request({
    url,
    method: 'POST',
    ...(options || {}),
  });
};

export const getRequest = (
  url: string,
  params?: { [key: string]: any },
  options?: { [key: string]: any }
) => {
  return instance.request({
    url,
    params,
    method: 'GET',
    ...(options || {}),
  });
};

export const postRequest = (
  url: string,
  data?: { [key: string]: any },
  options?: { [key: string]: any }
) => {
  return instance.request({
    url,
    method: 'POST',
    data,
    ...(options || {}),
  });
};
