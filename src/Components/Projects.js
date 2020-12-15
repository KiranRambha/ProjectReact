import React from 'react';
import IsVisible from 'react-is-visible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faProjectDiagram,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

export default function ({ darkMode }) {
  return (
    <section className='Projects justify-between items-center'>
      <div>
        <div className='font-header font text-xl pb-3'>
          <FontAwesomeIcon icon={faProjectDiagram} />
          <u className='pl-2'>Projects</u>
        </div>
        <IsVisible once>
          {(projectsIsVisible) => (
            <div className='pb-10 flex'>
              <div
                className={`w-1 ${darkMode}:bg-gray-200 bg-gray-500 rounded-full md:ml-6 opacity-25`}
              ></div>
              <div className='-ml-2'>
                <div
                  className={`py-4 flex ${
                    projectsIsVisible ? 'animated-3 fadeInDown' : 'hidden'
                  }`}
                >
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
                  ></div>
                  <div className='ml-8'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 className='font-semibold'>US Stocks - Alexa Skill</h6>
                    </div>
                    <h6 className='text-sm mt-1 pb-2'>
                      <strong>Technologies:</strong> Nodejs, Alexa Skill Kit,
                      Lambda
                    </h6>
                    <div>
                      <h6 className='text-xs'>(November 2020 - Present)</h6>
                    </div>
                    <div className='mt-2 flex items-center text-yellow-500'>
                      <FontAwesomeIcon icon={faCodeBranch} />
                      <h6 className='font-semibold text-xs ml-2 underline'>
                        Github (Coming Soon)
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className={`py-4 flex ${
                    projectsIsVisible ? 'animated-3 fadeInDown' : 'hidden'
                  }`}
                >
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
                  ></div>
                  <div className='ml-8'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 className='font-semibold'>Kiran Rambha Website</h6>
                    </div>
                    <h6 className='text-sm mt-1 pb-2'>
                      <strong>Technologies:</strong> Reactjs, Tailwind CSS
                    </h6>
                    <div>
                      <h6 className='text-xs'>(November 2020 - Present)</h6>
                    </div>
                    <div className='mt-2 flex items-center text-yellow-500'>
                      <FontAwesomeIcon icon={faCodeBranch} />
                      <a
                        href='https://github.com/KiranRambha/ProjectReact'
                        target='_blank'
                      >
                        <h6 className='font-semibold text-xs ml-2 underline'>
                          Github
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`py-4 flex ${
                    projectsIsVisible ? 'animated-3 fadeInDown' : 'hidden'
                  }`}
                >
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
                  ></div>
                  <div className='ml-8'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 className='font-semibold'>
                        Just Stream - Alexa Skill
                      </h6>
                    </div>
                    <h6 className='text-sm mt-1 pb-2'>
                      <strong>Technologies:</strong> Nodejs, Alexa Skill Kit,
                      etc.
                    </h6>
                    <div>
                      <h6 className='text-xs'>(April 2020 - Present)</h6>
                    </div>
                    <div className='mt-2 flex items-center text-yellow-500'>
                      <FontAwesomeIcon icon={faCodeBranch} />
                      <a
                        href='https://github.com/KiranRambha/projectParasite'
                        target='_blank'
                      >
                        <h6
                          className='font-semibold text-xs ml-2 underline'
                          href='https://github.com/KiranRambha/projectParasite'
                        >
                          Github
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`py-4 flex ${
                    projectsIsVisible ? 'animated-3 fadeInDown' : 'hidden'
                  }`}
                >
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
                  ></div>
                  <div className='ml-8'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 className='font-semibold'>
                        Local Exchange Trading System
                      </h6>
                    </div>
                    <h6 className='text-sm mt-1 pb-2'>
                      <strong>Technologies:</strong> C#, ASP.NET
                    </h6>
                    <div>
                      <h6 className='text-xs'>(2016 - 2017)</h6>
                    </div>
                    <div className='mt-2 flex items-center text-yellow-500'>
                      <FontAwesomeIcon icon={faCodeBranch} />
                      <a
                        href='https://github.com/KiranRambha/Local-Exchange-Trading-System'
                        target='_blank'
                      >
                        <h6 className='font-semibold text-xs ml-2 underline'>
                          Github
                        </h6>
                      </a>
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
