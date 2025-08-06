
import { useState, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';
import { ConfigProvider, App as AppAntd } from 'antd';
import { createStyledBreakpointsTheme } from 'styled-breakpoints';

import { lightTheme, darkTheme, AntdThemeConfig } from './themes';
import { blueTheme } from './themes/blueTheme';
import { ThemeContext } from './contexts/ThemeContext';
import GlobalStyles from './themes/globalStyles';
import App from './App';

export const breakpoints = {
  xs: '360px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
} as const;

const AppWrapper = () => {
  const [theme, setTheme] = useState(blueTheme);

  const styledTheme: DefaultTheme = useMemo(() => ({
    ...createStyledBreakpointsTheme({
      breakpoints,
    }),
    ...theme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeProvider theme={styledTheme}>
        <ConfigProvider theme={AntdThemeConfig}>
          <AppAntd>
            <GlobalStyles />
            <App />
          </AppAntd>
        </ConfigProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppWrapper;
