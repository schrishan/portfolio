import React, { useEffect } from 'react';
import './styles/main.scss'
import { useTheme } from './contexts/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import CustomCursor from './components/CustomCursor';

function App() {
  const { theme, color } = useTheme();

  // Add this script in your main JavaScript file or directly in your HTML

// Ensure the document is in light mode
document.documentElement.classList.remove('dark');

// Optionally, you can also clear any stored user preference
localStorage.removeItem('theme');

// Disable any automatic switching based on OS preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.remove('dark');
}

// Check and apply user preference on load
if (localStorage.theme === 'dark') {
  localStorage.removeItem('theme'); // Clear any existing dark mode setting
}

// Always set to light mode
document.documentElement.classList.remove('dark');



  useEffect(() => {
    // Dynamically update the CSS variables
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-color', color);
  }, [theme, color]);

  return (
<div>
      <header className="text-gray-900 dark:text-gray-100 p-4">
        <h1 className="text-2xl font-bold">React Theme and Color Switcher</h1>
        <i className="fa fa-camera-retro fa-5x"></i>
        <i className="fa fa-sun-o" aria-hidden="true"></i>
        <a href="#" className="dark-switch social-item flex h-50 w-50 leading-lh-42 text-center transition duration-300 text-fs-20 mx-6 bg-black-2 rounded-full"><i className="fa fa-sun text-white fa-5x"></i></a>
      </header>
      <main className="p-4">
        <ThemeSwitcher />
        <div className="mt-4">
          <p className="text-lg">This is a sample text to showcase theme and color switching.</p>
        </div>
      </main>
      <CustomCursor />
    </div>
  );
}

export default App;
