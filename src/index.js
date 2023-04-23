import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { GlobalStyles, theme } from '../src/styles/index';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);
