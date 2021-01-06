import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

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
        display: 'none',
      }}
      date='November 2020 - Present'
      dateClassName={'p-0'}
      iconStyle={{
        background,
        color,
        'box-shadow': `0 0 0 4px ${color}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`,
      }}
      icon={<FontAwesomeIcon icon={faCode} />}
    >
      <h6 className='vertical-timeline-element-title font-semibold text-base'>
        Kiran Rambha Website
      </h6>
      <h6 className='text-xs font-semibold text-gray-500'>
        My personal website built using React, React Hooks & TailwindCSS while
        following all responsive web design standards.
      </h6>
      <h6 className='text-sm mt-1 pb-2'>
        <strong>Technologies:</strong> React Js, Tailwind CSS, Firebase
      </h6>
      <div className='flex items-center text-yellow-500'>
        <FontAwesomeIcon icon={faCodeBranch} />
        <a href='https://github.com/KiranRambha/ProjectReact' target='_blank'>
          <h6 className='font-semibold text-xs ml-2 underline'>GitHub</h6>
        </a>
      </div>
    </VerticalTimelineElement>
  );
}
