import React from 'react';
import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Experiences from './Experiences';
import Education from './Education';
import Projects from './Projects';

export default function Body(props) {
  return (
    <section className='Body'>
      <div
        className={`${props.darkMode}:bg-black ${props.darkMode}:text-white px-4 lg:px-40 xl:px-56 font-content pb-10 flex-1 overflow-auto`}
      >
        <Introduction darkMode={props.darkMode} />
        <About />
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-0 xl:gap-40'>
          <Experiences darkMode={props.darkMode} />
          <Education darkMode={props.darkMode} />
        </div>
        <Projects darkMode={props.darkMode} />
        <Skills darkMode={props.darkMode} />
      </div>
    </section>
  );
}
