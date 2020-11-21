import React from 'react';

export default function Body(props) {
  return (
    <div
      className={`${props.darkMode}:bg-black ${props.darkMode}:text-white px-56 font-content pb-10`}
    >
      <div className='font-header font text-xl'>
        <u>About</u>
      </div>
      <div className='pb-10'>
        <b>Kiran</b> is a passionate and hardworking senior software engineer
        with 3+ years of experience at Accenture UK. He is a full-stack
        developer currently working with different JavaScript technologies like{' '}
        <b>Node Js</b>, <b>React</b> and many other cloud services in <b>AWS</b>{' '}
        and <b>Azure Stack</b>. He also has experience in developing web
        application using <b>ASP.NET CORE</b> as well as developing Alexa skills
        using <b>AWS Lambda</b> and <b>Alexa Skill Kit</b>. He has an excellent
        interpersonal and team working skills that have been cultivated
        throughout years.
      </div>
      <div className='pb-10'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className='pb-10'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className='pb-10'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className='pb-10'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum kiran.
      </div>
    </div>
  );
}
