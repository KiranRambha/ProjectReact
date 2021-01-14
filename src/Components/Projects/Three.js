import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCodeBranch,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

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
      date="Apr '20 - Present"
      dateClassName={'p-0'}
      iconStyle={{
        background,
        color,
        'box-shadow': `0 0 0 4px ${color}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`,
      }}
      icon={<FontAwesomeIcon icon={faCode} />}
    >
      <h6 className='vertical-timeline-element-title font-semibold text-base'>
        Just Stream - Alexa Skill{' '}
        <a
          href='https://skills-store.amazon.co.uk/deeplink/dp/B087P49PLW?deviceType=app&share&refSuffix=ss_copy'
          target='_blank'
          className='text-xs text-indigo-600 relative -top-0.5'
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </h6>
      <h6 className='text-xs font-semibold text-gray-500'>
        A movie search engine that lets people find where a movie or a tv show
        is streaming using their Alexa. Currently this skill supports Netflix,
        Amazon Prime Video and Apple TV+ streaming services.
      </h6>
      <h6 className='text-sm mt-1 pb-2'>
        <strong>Technologies:</strong> Node Js, Alexa Skill Kit, etc.
      </h6>
      <div className='flex items-center text-yellow-500'>
        <FontAwesomeIcon icon={faCodeBranch} />
        <a
          href='mailto:kiran.rambha@outlook.com?subject=I want to checkout Just Stream source code'
          target='_blank'
        >
          <h6 className='font-semibold text-xs ml-2 underline'>
            GitHub (Access on Request)
          </h6>
        </a>
      </div>
    </VerticalTimelineElement>
  );
}
