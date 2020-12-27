import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  let theme = localStorage.getItem('darkMode');
  return (
    <header
      className={`font-bold font-header h-24 lg:h-40 bg-white text-black py-4 lg:py-24 px-4 lg:px-40 xl:px-56 flex justify-between items-center ${props.darkMode}:bg-black ${props.darkMode}:text-white`}
    >
      <div className='text-xl font-bold'>KIRAN RAMBHA</div>
      <div className='lg:left-60 xl:left-96'>
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
      {/* <div className='relative lg:left-48 lg:bottom-16 hidden lg:block'>
        <FontAwesomeIcon icon={faBars} />
      </div> */}
    </header>
  );
}

export default Header;
