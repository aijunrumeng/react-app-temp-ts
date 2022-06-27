import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';

import store from '@/store';

import Router from '@/router';

import 'antd/dist/antd.variable.min.css';
import './assets/style/base.css';

ConfigProvider.config({
  theme: {
    primaryColor: '#36ad93',
  },
});

const container = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(container);

const app = (
  <Provider store={store}>
    <ConfigProvider locale={zh_CN}>
      <Router />
    </ConfigProvider>
  </Provider>
);

root.render(app);
