import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  return (
    <div>
      <div className='font-header font text-xl'>
        <FontAwesomeIcon icon={faTools} />
        <u className='pl-2'>Skills</u>
      </div>
    </div>
  );
}
