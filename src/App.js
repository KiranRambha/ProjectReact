import ProgressBar from './Components/ProgressBar';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import React, { useState } from 'react';

function App() {
  let theme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  let systemThemeChanged = theme !== localStorage.getItem('systemTheme');

  localStorage.setItem('systemTheme', theme);

  if (systemThemeChanged) {
    localStorage.setItem('darkMode', theme);
  } else if (localStorage.getItem('darkMode')) {
    theme = localStorage.getItem('darkMode');
  } else {
    localStorage.setItem('darkMode', theme);
  }

  const [darkMode, setDarkMode] = useState(theme);
  return (
    <div
      className={`${darkMode}:bg-black relative pb-10 min-h-screen flex flex-col`}
    >
      <ProgressBar />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Body darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
