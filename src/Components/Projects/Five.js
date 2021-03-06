import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCodeBranch,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function Five({ color, background }) {
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
      date="Jan '21 - Present"
      dateClassName={'p-0'}
      iconStyle={{
        background: 'rgb(16, 204, 82)',
        color: background,
        'box-shadow': `0 0 0 4px ${color}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`,
      }}
      icon={<FontAwesomeIcon icon={faCode} />}
    >
      <h6 className='vertical-timeline-element-title font-semibold text-base'>
        My Wall Street Bets{' '}
        <text className='text-xs text-indigo-600'>[coming soon]</text>
        {/*<a
          href='http://mywallstreetbets.co.uk/'
          target='_blank'
          className='text-xs text-indigo-600 relative -top-0.5'
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>*/}
      </h6>
      <h6 className='text-xs font-semibold text-gray-500'>
        Track your stock investments, profit/losses, Daily performance, FX
        Impact and much much more...
      </h6>
      <h6 className='text-sm mt-1 pb-2'>
        <strong>Technologies:</strong> React Js, Node Js, AWS Lambda, Amazon API
        Gateway etc.
      </h6>
      <div className='flex items-center text-yellow-500'>
        <FontAwesomeIcon icon={faCodeBranch} />
        <a
          href='mailto:kiran.rambha@outlook.com?subject=I want to learn more about My Wall Street Bets'
          target='_blank'
          rel='noreferrer'
        >
          <h6 className='font-semibold text-xs ml-2 underline'>
            GitHub (Access on Request)
          </h6>
        </a>
      </div>
    </VerticalTimelineElement>
  );
}
