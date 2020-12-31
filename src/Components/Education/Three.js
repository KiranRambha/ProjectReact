import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapPin } from '@fortawesome/free-solid-svg-icons';

export default function One({ color, background }) {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element-work'
      contentStyle={{
        background,
        color,
        padding: '0px',
        '-webkit-box-shadow': 'none',
        'box-shadow': 'none',
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${background}`,
      }}
      date='2007 - 2011'
      dateClassName={'p-0'}
      iconStyle={{
        background,
        color,
        'box-shadow': `0 0 0 4px ${color}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`,
      }}
      icon={<FontAwesomeIcon icon={faGraduationCap} />}
    >
      <h6 className='vertical-timeline-element-title font-semibold text-base'>
        Gowtham Concept School
      </h6>
      <h6 className='vertical-timeline-element-subtitle text-sm'>
        High School
      </h6>
      <div className='mt-2 flex items-center'>
        <FontAwesomeIcon icon={faMapPin} />
        <h6 className='font-semibold text-xs ml-2'>Gudivada, AP, India</h6>
      </div>
    </VerticalTimelineElement>
  );
}
