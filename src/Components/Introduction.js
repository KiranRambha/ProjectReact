import React from 'react';
import ProfilePic from '../Profile.jpg';

export default function Introduction(props) {
  return (
    <section className='Introduction'>
      <div className={`${props.darkMode}:bg-black pb-8 md:pb-0 lg:pb-0`}>
        <div
          className={`${props.darkMode}:bg-black ${props.darkMode}:text-white font-header pt-0 lg:pt-10 pb-10 md:pt-10 text-4xl md:w-3/5 lg:w-3/5 md:float-left lg:float-left`}
        >
          Full-Stack Developer based in London.
          <br /> Currently working as Sr. Software Engineer at Accenture UK.
        </div>
        <div className='md:w-2/5 lg:w-2/5 pl-16 lg:pl-28 md:float-left lg:float-left md:py-12 lg:pt-0'>
          <img
            className='w-48 rounded-full'
            src={ProfilePic}
            alt='Kiran Rambha'
          />
        </div>
        <div className='clear-both'></div>
      </div>
    </section>
  );
}
