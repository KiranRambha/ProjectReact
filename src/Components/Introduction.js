import React from 'react';

export default function Introduction(props) {
  return (
    <div className={`${props.darkMode}:bg-black`}>
      <div
        className={`${props.darkMode}:bg-black ${props.darkMode}:text-white px-56 font-header pb-10 text-4xl w-4/5`}
      >
        Software Engineer &amp; Full-Stack Developer based in London, UK.
        Currently working at Accenture UK.
      </div>
    </div>
  );
}
