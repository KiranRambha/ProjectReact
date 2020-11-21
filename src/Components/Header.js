import React from 'react';

function Header(props) {
  return (
    <header
      className={`font-bold font-header h-40 bg-white text-black py-24 px-56 flex justify-between items-center ${props.darkMode}:bg-black ${props.darkMode}:text-white`}
    >
      <div className='text-xl'>KIRAN RAMBHA</div>
      <div>
        <label className='switch'>
          <input
            type='checkbox'
            onChange={() =>
              props.darkMode === 'dark'
                ? props.setDarkMode('light')
                : props.setDarkMode('dark')
            }
          />
          <span className='slider round'></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
