import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme, color, setColor } = useTheme();

  return (
    <div>
      <div>
        <label>Choose Theme:</label>
        <select onChange={(e) => setTheme(e.target.value)} value={theme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div>
        <label>Choose Color:</label>
        <select onChange={(e) => setColor(e.target.value)} value={color}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
        </select>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
