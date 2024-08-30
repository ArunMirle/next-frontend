'use client'
import { QueryClient } from 'react-query';
import Home from './home/page';

export default function MainPage() {
  const queryClient = new QueryClient();
  return (
    <div>

      <Home />
    </div>
  );
}
