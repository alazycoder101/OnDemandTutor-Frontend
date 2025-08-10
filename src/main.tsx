import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StrictMode } from 'react';
import GlobalStyles from './themes/globalStyles.ts';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createStyledBreakpointsTheme } from 'styled-breakpoints';
import { App as AppAntd } from 'antd';

import { LocaleProvider } from './contexts/LocaleContext.tsx';
import { ThemeProvider } from './contexts/ThemeContext';

import './i18n';
export const breakpoints = {
  xs: '360px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
} as const;

const styledTheme: DefaultTheme = createStyledBreakpointsTheme({
  breakpoints,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <StyledThemeProvider theme={styledTheme}>
          <AppAntd>
            <App />
          </AppAntd>
          <GlobalStyles />
        </StyledThemeProvider>
      </LocaleProvider>
    </ThemeProvider>
  </StrictMode>
)
