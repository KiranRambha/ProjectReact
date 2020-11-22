import React from 'react';
import Introduction from './Introduction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import About from './About';
import Skills from './Skills';

export default function Body(props) {
  return (
    <div
      className={`${props.darkMode}:bg-black ${props.darkMode}:text-white px-4 lg:px-56 font-content pb-10 flex-1 overflow-auto`}
    >
      <Introduction darkMode={props.darkMode} />
      <About />
      <Skills />
    </div>
  );
}
