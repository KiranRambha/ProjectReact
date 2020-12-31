import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMapPin } from '@fortawesome/free-solid-svg-icons';

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
      date="Oct '17 - Nov '18"
      dateClassName={'p-0'}
      iconStyle={{
        background,
        color,
        'box-shadow': `0 0 0 4px ${color}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`,
      }}
      icon={<FontAwesomeIcon icon={faLaptopCode} />}
    >
      <h6 className='vertical-timeline-element-title font-semibold text-base'>
        Software Engineer Associate
      </h6>
      <h6 className='vertical-timeline-element-subtitle text-sm'>
        Accenture UK
      </h6>
      <h6 className='text-xs mt-2'>
        <strong>Specialized in:</strong> Murex, Python, HTML, JavaScript, CSS,
        Shell
      </h6>
      <div className='mt-2 flex items-center'>
        <FontAwesomeIcon icon={faMapPin} />
        <h6 className='font-semibold text-xs ml-2'>London, UK</h6>
      </div>
    </VerticalTimelineElement>
  );
}
