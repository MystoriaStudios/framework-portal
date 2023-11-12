import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

const NavTheme = () => {
  const localStorageKey = 'themePreference';

  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem(localStorageKey);
    return storedTheme ? JSON.parse(storedTheme) : prefersDarkMode;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => setIsDarkMode(mediaQuery.matches);

    mediaQuery.addListener(handleThemeChange);

    return () => {
      mediaQuery.removeListener(handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    );
    localStorage.setItem(localStorageKey, JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <button onClick={toggleTheme}>
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default NavTheme;
