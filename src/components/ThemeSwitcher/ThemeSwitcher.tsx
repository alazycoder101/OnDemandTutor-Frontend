import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { lightTheme, darkTheme, blueTheme } from '../../themes';

const ThemeSwitcher: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(lightTheme)}>Light</button>
      <button onClick={() => setTheme(darkTheme)}>Dark</button>
      <button onClick={() => setTheme(blueTheme)}>Blue</button>
    </div>
  );
};

export default ThemeSwitcher;