import React, { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scroll, setScroll] = useState(0);
  console.log('component re-renderred');
  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };
    console.log('scroll listener mounted');
    window.addEventListener('scroll', progressBarHandler);

    return () => {
      console.log('scroll listener unmounted');
      window.removeEventListener('scroll', progressBarHandler);
    };
  }, []);

  return (
    <div id='progressBarContainer' className='lg:bottom-0'>
      <div
        id='progressBar'
        style={{ transform: `scale(${scroll}, 1)`, opacity: 100 }}
      />
    </div>
  );
}
