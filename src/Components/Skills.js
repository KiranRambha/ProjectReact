import React from 'react';
import IsVisible from 'react-is-visible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import SkillsList from './SkillsList';

export default function Skills() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context('../assets/', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <section className='Skills'>
      <div>
        <div className='font-header font text-xl pb-3'>
          <FontAwesomeIcon icon={faTools} />
          <u className='pl-2'>Skills</u>
        </div>
        <IsVisible once>
          {(isVisible) => <SkillsList isVisible={isVisible} images={images} />}
        </IsVisible>
      </div>
    </section>
  );
}
