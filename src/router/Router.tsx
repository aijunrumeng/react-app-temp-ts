import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Foo from '@/pages/Foo';
import Bar from '@/pages/Bar';

import NotFound from '@/pages/404';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/foo" element={<Foo />}></Route>
        <Route path="/bar" element={<Bar />}></Route>
        {/* other routes */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
