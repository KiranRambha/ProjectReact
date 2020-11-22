import React from 'react';

function Header(props) {
  let theme = localStorage.getItem('darkMode');
  return (
    <header
      className={`font-bold font-header h-24 lg:h-40 bg-white text-black py-4 lg:py-24 px-4 lg:px-56 flex justify-between items-center ${props.darkMode}:bg-black ${props.darkMode}:text-white`}
    >
      <div className='text-xl'>KIRAN RAMBHA</div>
      <div>
        <label className='switch'>
          <input
            type='checkbox'
            checked={theme === 'dark' ? '' : 'checked'}
            onChange={() => {
              if (props.darkMode === 'dark') {
                props.setDarkMode('light');
                localStorage.setItem('darkMode', 'light');
              } else {
                localStorage.setItem('darkMode', 'dark');
                props.setDarkMode('dark');
              }
            }}
          />
          <span className='slider round'></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
