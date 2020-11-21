import React from 'react';

function Footer(props) {
  return (
    <footer
      className={`${props.darkMode}:bg-black ${props.darkMode}:text-white text-center text-xs p-3 absolute bottom-0 w-full`}
    >
      &copy; Copyright 2020
    </footer>
  );
}

export default Footer;
