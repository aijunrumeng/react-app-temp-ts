import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

import styles from './home.scss';

export default function Home() {
  const info = useSelector((state: RootState) => state.info);

  return (
    <div className={styles['home']}>
      <div>{info}</div>
    </div>
  );
}
