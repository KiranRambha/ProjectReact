import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
  let date = new Date().getFullYear();
  return (
    <footer
      className={`${props.darkMode}:bg-black ${props.darkMode}:text-white text-xs p-3 absolute bottom-0 w-full px-4 lg:px-40 xl:px-56 flex justify-between`}
    >
      <div>
        <span>&copy; Copyright {date} KIRAN RAMBHA</span>
        <br />
        <span className='pl-3.5'>
          Made with ❤️ in <b>London</b>
        </span>
      </div>
      <div className='text-2xl'>
        <span className='px-3'>
          <a href='https://github.com/KiranRambha' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
        <span className='px-3'>
          <a href='https://uk.linkedin.com/in/kiranrambha' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </span>
        <span className='pl-3'>
          <a href='mailto:kiran.rambha@outlook.com' target='_blank'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
