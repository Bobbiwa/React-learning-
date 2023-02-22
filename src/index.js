import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './config/router'
import { ConfigProvider } from 'antd';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        }
      }}
    >
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);