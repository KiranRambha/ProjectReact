import React from 'react';
import Introduction from './Introduction';

export default function Body(props) {
  return (
    <div
      className={`${props.darkMode}:bg-black ${props.darkMode}:text-white px-4 lg:px-56 font-content pb-10 flex-1 overflow-auto`}
    >
      <Introduction darkMode={props.darkMode} />
      <div className='font-header font text-xl'>
        <u>About</u>
      </div>
      <div className='pb-10'>
        <b>Kiran</b> is a passionate and hardworking senior software engineer
        with 4+ years of experience at Accenture UK. He is a full-stack
        developer currently working with different JavaScript technologies like{' '}
        <b>Node Js</b>, <b>React</b> and many other cloud services in <b>AWS</b>{' '}
        and <b>Azure Stack</b>. He also has experience in developing web
        application using <b>ASP.NET CORE</b> as well as developing Alexa skills
        using <b>AWS Lambda</b> and <b>Alexa Skill Kit</b>. He has excellent
        interpersonal and team working skills that have been cultivated
        throughout years.
      </div>
    </div>
  );
}
