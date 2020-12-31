import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faCode } from '@fortawesome/free-solid-svg-icons';
import One from './Projects/One';
import Two from './Projects/Two';
import Three from './Projects/Three';
import Four from './Projects/Four';
import End from './End';

export default function EducationV2({ darkMode }) {
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
    <section className='Projects'>
      <div>
        <div className='font-header font text-xl pb-10'>
          <FontAwesomeIcon icon={faProjectDiagram} />
          <u className='pl-2 font-bold'>Projects</u>
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
                <End color={color} icon={faCode} />
              </VerticalTimeline>
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </section>
  );
}
