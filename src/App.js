import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import React, { useState } from 'react';
import Introduction from './Components/Introduction';

function App() {
  const [darkMode, setDarkMode] = useState('dark');
  return (
    <div className={`${darkMode}:bg-black relative pb-10 min-h-screen`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Introduction darkMode={darkMode} />
      <Body darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
