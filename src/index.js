import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './config/router';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './store/index'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <BrowserRouter>
        <Provider store={store}>
          <RenderRouter />
        </Provider>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
