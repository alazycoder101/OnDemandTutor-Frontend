import styled from 'styled-components';

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;
  border: none;
  background: var(--toolbarBg-color);
  color: var(--textPrimary-color);
  cursor: pointer;
  
  &:hover {
    background: var(--hoverSecondary-color);
    color: var(--primary-color);
  }
`;

export const ThemeName = styled.span`
  margin-right: 8px;
  font-size: 14px;
  color: var(--textPrimary-color);
`;

export const ThemeIndicator = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 8px;
`;