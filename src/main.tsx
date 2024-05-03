import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MainContext } from '../context/MainContext.tsx';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContext>
        <App />
      </MainContext>
    </BrowserRouter>
  </React.StrictMode>,
);
