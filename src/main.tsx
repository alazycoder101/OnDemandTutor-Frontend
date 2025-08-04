import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react';

import { LocaleProvider } from './contexts/LocaleContext.tsx';
import AppWrapper from './AppWrapper';

import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <AppWrapper />
    </LocaleProvider>
  </StrictMode>
)
