import React from 'react';
import IsVisible from 'react-is-visible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faMapPin } from '@fortawesome/free-solid-svg-icons';

export default function Education({ darkMode }) {
  return (
    <section className='Education'>
      <div>
        <div className='font-header font text-xl pb-3'>
          <FontAwesomeIcon icon={faUserGraduate} />
          <u className='pl-2'>Education</u>
        </div>
        <IsVisible once>
          {(isVisible) => (
            <div className='pb-10 flex'>
              <div
                className={`w-1 ${darkMode}:bg-gray-200 bg-gray-500 rounded-full md:ml-6 opacity-25`}
              ></div>
              <div className='-ml-2'>
                <div
                  className={`py-4 flex ${
                    isVisible ? 'animated-3 fadeInDown' : 'hidden'
                  }`}
                >
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
                  ></div>
                  <div className='ml-8'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 class='font-semibold'>
                        <span>Royal Holloway</span>
                        <span className='hidden lg:contents'>
                          , University of London
                        </span>
                      </h6>
                      <h6 class='text-xs ml-2'>(2013 - 2017)</h6>
                    </div>
                    <h6 class='text-sm'>
                      BSc Computer Science (Year in Industry)
                    </h6>
                    <div class='mt-2 flex items-center'>
                      <FontAwesomeIcon icon={faMapPin} />
                      <h6 class='font-semibold text-xs ml-2'>London, UK</h6>
                    </div>
                  </div>
                </div>
                <div
                  className={`py-4 flex ${
                    isVisible ? 'animated-6 fadeInDown' : 'hidden'
                  }`}
                >
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
                  ></div>
                  <div className='ml-8'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 class='font-semibold'>
                        Sri Chaitanya{' '}
                        <span className='hidden lg:contents'>
                          Junior College
                        </span>
                      </h6>
                      <h6 class='text-xs ml-2'>(2011 - 2013)</h6>
                    </div>
                    <h6 class='text-sm'>Intermediate Education (A-Level)</h6>
                    <div class='mt-2 flex items-center'>
                      <FontAwesomeIcon icon={faMapPin} />
                      <h6 class='font-semibold text-xs ml-2'>
                        Vijayawada, AP, India
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className={`py-4 flex ${
                    isVisible ? 'animated-9 fadeInDown' : 'hidden'
                  }`}
                >
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
                  ></div>
                  <div className='ml-8'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 class='font-semibold'>
                        Gowtham{' '}
                        <span className='hidden lg:contents'>Concept</span>{' '}
                        School
                      </h6>
                      <h6 class='text-xs ml-2'>(2007-2011)</h6>
                    </div>
                    <h6 class='text-sm'>High School</h6>
                    <div class='mt-2 flex items-center'>
                      <FontAwesomeIcon icon={faMapPin} />
                      <h6 class='font-semibold text-xs ml-2'>
                        Gudivada, AP, India
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </IsVisible>
      </div>
    </section>
  );
}
