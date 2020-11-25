import React from 'react';
import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

export default function Body(props) {
  return (
    <section className='Body'>
      <div
        className={`${props.darkMode}:bg-black ${props.darkMode}:text-white px-4 lg:px-56 font-content pb-10 flex-1 overflow-auto`}
      >
        <Introduction darkMode={props.darkMode} />
        <About />
        <div class='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-40'>
          <Experience darkMode={props.darkMode} />
          <Education darkMode={props.darkMode} />
        </div>
        <Skills darkMode={props.darkMode} />
      </div>
    </section>
  );
}
