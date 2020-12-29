import React from 'react';
import Typist from 'react-typist';
import ProfilePic from '../ProfilePic.jpg';

export default function Introduction(props) {
  return (
    <section className='Introduction'>
      <div className={`${props.darkMode}:bg-black pb-8 md:pb-0 lg:pb-0`}>
        <div
          className={`${props.darkMode}:bg-black ${props.darkMode}:text-white font-header pt-0 lg:pt-10 pb-10 md:pt-10 text-4xl md:w-3/5 lg:w-3/5 md:float-left lg:float-left`}
        >
          <Typist
            cursor={{
              show: true,
              blink: true,
              element: '/',
              hideWhenDone: true,
              hideWhenDoneDelay: 2000,
            }}
            startDelay={2000}
            avgTypingDelay={40}
          >
            Hi, I am Kiran, A Full-Stack Developer based in London.
            <br />
            <Typist.Delay ms={500} />
            Currently working as a Sr. Software Engineer at Accenture UK.
          </Typist>
        </div>
        <div className='md:w-2/5 xl:w-2/5 pl-20 lg:pl-16 xl:pl-44 lg:pt-16 lg:pb-16 xl:pt-6 md:float-left lg:float-left md:py-12 xl:pt-0'>
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
