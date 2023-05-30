import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

export default function Home() {
  const info = useSelector((state: RootState) => state.info);

  return <>{info}</>;
}
