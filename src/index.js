import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from '../src/styles/index';
import { ThemeProvider } from '@emotion/react';
import { App } from 'App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
