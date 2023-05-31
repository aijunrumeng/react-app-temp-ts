import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

export default function Home() {
  const info = useSelector((state: RootState) => state.info);

  return (
    <div>
      <div>{info}</div>
      <a href="">1</a>
    </div>
  );
}
