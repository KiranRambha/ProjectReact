import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState('dark');
  return (
    <div
      className={`${darkMode}:bg-black relative pb-10 min-h-screen flex flex-col`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Body darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
