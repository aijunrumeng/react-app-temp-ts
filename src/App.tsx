import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { queryUserInfo } from '@/services/user';

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    queryInfo();
  }, []);

  const queryInfo = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch({ type: 'xxx' });
      navigate('/login');
    } else {
      try {
        const res = await queryUserInfo();
        const { success, data } = res.data;

        if (success && data) {
          dispatch({ type: 'xxx', data });
        } else {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } catch (error) {}
    }
  };

  return null;
}
