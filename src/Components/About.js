import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div>
      <div className='font-header font text-xl'>
        <FontAwesomeIcon icon={faUser} />
        <u className='pl-2'>About</u>
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
