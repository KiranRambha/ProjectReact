import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

export default function Four({ color, background }) {
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
      date='2016 - 2017'
      dateClassName={'p-0'}
      iconStyle={{
        background,
        color,
        'box-shadow': `0 0 0 4px ${color}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`,
      }}
      icon={<FontAwesomeIcon icon={faCode} />}
    >
      <h6 className='vertical-timeline-element-title font-semibold text-base'>
        Local Exchange Trading System
      </h6>
      <h6 className='text-xs font-semibold text-gray-500'>
        LETS is a web application where members can exchange goods and services
        among themselves using a built in local currency (LETS Credit)
      </h6>
      <h6 className='text-sm mt-1 pb-2'>
        <strong>Technologies:</strong> C#, ASP.NET MVC
      </h6>
      <div className='flex items-center text-yellow-500'>
        <FontAwesomeIcon icon={faCodeBranch} />
        <a
          href='https://github.com/KiranRambha/Local-Exchange-Trading-System'
          target='_blank'
        >
          <h6 className='font-semibold text-xs ml-2 underline'>GitHub</h6>
        </a>
      </div>
    </VerticalTimelineElement>
  );
}
