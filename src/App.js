import Header from './Components/Header';
import Footer from './Components/Footer';
import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState('dark');
  return (
    <div className='App'>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
