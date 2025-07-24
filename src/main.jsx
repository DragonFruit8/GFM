import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router';
import './index.css';
import App from './App.jsx';
import { Tolgee, DevTools, TolgeeProvider, FormatSimple } from "@tolgee/react";

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    language: 'en',

    // for development
    apiUrl: import.meta.env.VITE_APP_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_APP_TOLGEE_API_KEY,
  });

createRoot (document.getElementById ('root')).render (
    <BrowserRouter>
      <TolgeeProvider
  tolgee={tolgee}
  fallback="Loading..."
>
  <App />
</TolgeeProvider>
    </BrowserRouter>
);
