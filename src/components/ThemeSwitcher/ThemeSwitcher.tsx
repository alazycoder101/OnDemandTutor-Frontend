import React from 'react';
import { Dropdown, MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTheme, ThemeType } from '../../contexts/ThemeContext';
import * as Styled from './ThemeSwitcher.styled';

const ThemeSwitcher: React.FC = () => {
  const { theme, setCurrentTheme } = useTheme();

  const themeItems: MenuProps['items'] = [
    {
      key: 'light',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Styled.ThemeIndicator color="#B94AB7" />
          Light
        </div>
      ),
      onClick: () => setCurrentTheme('light'),
    },
    {
      key: 'dark',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Styled.ThemeIndicator color="#9C27B0" />
          Dark
        </div>
      ),
      onClick: () => setCurrentTheme('dark'),
    },
    {
      key: 'blue',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Styled.ThemeIndicator color="#2196F3" />
          Blue
        </div>
      ),
      onClick: () => setCurrentTheme('blue'),
    },
  ];

  const getThemeIcon = () => {
    switch (theme.name) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'blue':
        return '💧';
      default:
        return '🎨';
    }
  };

  return (
    <Styled.ThemeSwitcherContainer>
      <Dropdown menu={{ items: themeItems }} trigger={['click']}>
        <Styled.ThemeButton>
          {getThemeIcon()}
        </Styled.ThemeButton>
      </Dropdown>
    </Styled.ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;