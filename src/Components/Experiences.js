import React, { useState } from 'react';
// import VisibilitySensor from 'react-is-visible';
import VisibilitySensor from 'react-visibility-sensor';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMapPin } from '@fortawesome/free-solid-svg-icons';
import One from './Experiences/One';
import Two from './Experiences/Two';
import Three from './Experiences/Three';
import Four from './Experiences/Four';

export default function Experiences({ darkMode }) {
  let color = darkMode === 'dark' ? 'white' : 'black';
  let background = darkMode === 'dark' ? 'rgb(0, 0, 0)' : 'white';
  const [isVisible, setIsVisible] = useState(false);
  function onChange(isVisible) {
    if (isVisible) {
      console.log('visibility sensor: ', isVisible);
      setIsVisible(isVisible);
    }
  }
  return (
    <section className='Experience'>
      <div>
        <div className='font-header font text-xl pb-10'>
          <FontAwesomeIcon icon={faLaptopCode} />
          <u className='pl-2 font-bold'>Experience</u>
          <div className='pt-3 font-content'>
            <VisibilitySensor onChange={onChange} partialVisibility='bottom'>
              <VerticalTimeline
                layout={'1-column-left'}
                animate={isVisible ? false : true}
                className={`${darkMode}-vertical-timeline-custom-line`}
              >
                <One color={color} background={background} />
                <Two color={color} background={background} />
                <Three color={color} background={background} />
                <Four color={color} background={background} />
              </VerticalTimeline>
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </section>
  );
}
