import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <section className='About'>
      <div>
        <div className='font-header font text-xl pb-3'>
          <FontAwesomeIcon icon={faUser} />
          <u className='pl-2'>About</u>
        </div>
        <div className='pb-10'>
          Hi my name is <b>Kiran</b>. I am a passionate and hardworking senior
          software engineer with 4+ years of experience at Accenture UK. I am a
          full-stack developer currently working with different JavaScript
          technologies like <b>Node Js</b>, <b>React</b> and many other cloud
          services in <b>AWS</b> and <b>Azure Stack</b>. I also have experience
          in developing high-quality large scale web application using{' '}
          <b>ASP.NET CORE</b> as well as developing Amazon Alexa skills using{' '}
          <b>Alexa Skill Kit</b> and <b>AWS Lambda</b>. I have excellent
          interpersonal and team working skills that have been cultivated
          throughout years.
        </div>
        <div className='pb-10'>
          Along with being a full-stack developer, I really enjoy photography -
          especially landscape and street photography. I recently started
          exploring the world of film photography and I love learning all the
          ins and outs of different film stocks and film cameras. Aside from
          photography I like to spend my down time at the gym or taking long
          walks in my local park. I also like to travel and explore different
          food and culture from different countries.
        </div>
      </div>
    </section>
  );
}
