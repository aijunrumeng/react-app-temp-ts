import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from '@/pages/home';

import NotFound from '@/pages/404';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* other routes */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
