import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGraduate,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import One from './Education/One';
import Two from './Education/Two';
import Three from './Education/Three';
import End from './End';

export default function EducationV2({ darkMode }) {
  let color = darkMode === 'dark' ? 'white' : 'black';
  let background = darkMode === 'dark' ? 'rgb(0, 0, 0)' : 'white';
  const [isVisible, setIsVisible] = useState(false);
  function onChange(isVisible) {
    if (isVisible) {
      setIsVisible(isVisible);
    }
  }
  return (
    <section className='Education'>
      <div>
        <div className='font-header font text-xl pb-10'>
          <FontAwesomeIcon icon={faUserGraduate} />
          <u className='pl-2 font-bold'>Education</u>
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
                <End color={color} icon={faGraduationCap} />
              </VerticalTimeline>
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </section>
  );
}
