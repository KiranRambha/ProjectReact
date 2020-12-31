import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function One() {
  return (
    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={<FontAwesomeIcon icon={faLaptopCode} />}
    />
  );
}
