import React from 'react';
import Typist from 'react-typist';
import ProfilePic from '../ProfilePic.jpg';

export default function Introduction(props) {
  return (
    <section className='Introduction'>
      <div className={`${props.darkMode}:bg-black pb-8 md:pb-0 lg:pb-0`}>
        <div
          className={`${props.darkMode}:bg-black ${props.darkMode}:text-white font-header pt-0 lg:pt-28 xl:pt-20 pb-10 md:pt-20 text-4xl md:w-3/5 lg:w-3/5 md:float-left lg:float-left`}
        >
          <Typist
            cursor={{
              show: true,
              blink: true,
              element: '_',
              hideWhenDone: true,
              hideWhenDoneDelay: 2000,
            }}
            startDelay={2000}
          >
            Hi, I'm Kiran Rambha, A Full Stack Web Developer based in London.
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
