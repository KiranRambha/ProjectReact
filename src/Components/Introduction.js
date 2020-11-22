import React from 'react';
import ProfilePic from '../Profile.jpg';

export default function Introduction(props) {
  return (
    <div className={`${props.darkMode}:bg-black`}>
      <div
        className={`${props.darkMode}:bg-black ${props.darkMode}:text-white font-header py-10 text-4xl w-3/5 float-left`}
      >
        Full-Stack Developer based in London.
        <br /> Currently working as Sr. Software Engineer at Accenture UK.
      </div>
      <div className='w-2/5 pl-16 float-left'>
        <img
          className='w-48 rounded-full'
          src={ProfilePic}
          alt='Kiran Rambha'
        />
      </div>
      <div className='clear-both'></div>
    </div>
  );
}
