import React from 'react';
import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Experience from './ExperienceV2';
import Education from './EducationV2';
import Projects from './ProjectsV2';

export default function Body(props) {
  return (
    <section className='Body'>
      <div
        className={`${props.darkMode}:bg-black ${props.darkMode}:text-white px-4 lg:px-40 xl:px-56 font-content pb-10 flex-1 overflow-auto`}
      >
        <Introduction darkMode={props.darkMode} />
        <About />
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-0 xl:gap-40'>
          <Experience darkMode={props.darkMode} />
          <Education darkMode={props.darkMode} />
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-0 xl:gap-40'>
          <Projects darkMode={props.darkMode} />
        </div>
        <Skills darkMode={props.darkMode} />
      </div>
    </section>
  );
}
