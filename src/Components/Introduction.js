import React from 'react';
import Typist from 'react-typist';
import ProfilePic from '../ProfilePic.jpg';

export default function Introduction(props) {
  return (
    <section className='Introduction'>
      <div
        className={`${props.darkMode}:bg-black pb-8 md:pb-0 lg:pb-0 flex flex-col-reverse md:flex-row`}
      >
        <div
          className={`${props.darkMode}:bg-black ${props.darkMode}:text-white font-header pt-0 md:pb-10 md:pt-20 lg:pt-12 xl:pt-16 text-3xl md:text-4xl md:w-3/5 lg:w-3/5 xl:w-4/5 md:float-left lg:float-left text-center md:text-left`}
        >
          <Typist
            cursor={{
              show: true,
              blink: true,
              element: '.',
            }}
            startDelay={2000}
          >
            Hi, I'm Kiran Rambha
            <br />
            <Typist.Delay ms={1000} />
            Full Stack Web Developer based in London
          </Typist>
        </div>
        <div className='md:w-2/5 xl:w-2/5 lg:pt-8 pb-10 lg:pb-16 xl:pt-6 md:float-left lg:float-left md:py-12 xl:pt-0'>
          <img
            className='w-48 rounded-full m-auto'
            src={ProfilePic}
            alt='Kiran Rambha'
          />
        </div>
        <div className='clear-both'></div>
      </div>
    </section>
  );
}
