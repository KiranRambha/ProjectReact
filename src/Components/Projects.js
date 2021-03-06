import React from 'react';
import IsVisible from 'react-is-visible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faProjectDiagram,
  faCodeBranch,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function ({ darkMode }) {
  return (
    <section className='Projects justify-between items-center'>
      <div>
        <div className='font-header font text-xl pb-3'>
          <FontAwesomeIcon icon={faProjectDiagram} />
          <u className='pl-2 font-bold'>Projects</u>
        </div>
        <IsVisible once>
          {(projectsIsVisible) => (
            <div className='pb-10 flex'>
              <div
                className={`w-3 md:w-1.5 xl:w-1 ${darkMode}:bg-purple-600 bg-red-500 rounded-full md:ml-6 opacity-60`}
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
                  <div className='ml-8 fit-context'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 className='font-semibold'>
                        Stock Hub - Alexa Skill{' '}
                        <a
                          href='https://skills-store.amazon.co.uk/deeplink/dp/B08RDDV9KD?deviceType=app&share&refSuffix=ss_copy'
                          target='_blank'
                          className='text-xs text-indigo-600 relative -top-0.5'
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                      </h6>
                    </div>
                    <div>
                      <h6 className='text-xs font-semibold text-gray-500'>
                        Get the latest price of any stock, When a company is
                        reporting their quarterly earnings and much much more
                        using Alexa...
                      </h6>
                    </div>
                    <div>
                      <h6 className='text-sm mt-1 pb-2'>
                        <strong>Technologies:</strong> Node Js, Alexa Skill Kit,
                        Lambda, IEX Cloud, Zacks etc.
                      </h6>
                    </div>
                    <div>
                      <h6 className='text-xs'>(Nov '2020 - Present)</h6>
                    </div>
                    <div className='mt-2 flex items-center text-yellow-500'>
                      <FontAwesomeIcon icon={faCodeBranch} />
                      <a
                        href='mailto:kiran.rambha@outlook.com?subject=I want to checkout Stock Hub source code'
                        target='_blank'
                      >
                        <h6 className='font-semibold text-xs ml-2 underline'>
                          Github (Access on Request)
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`py-4 flex ${
                    projectsIsVisible ? 'animated-6 fadeInDown' : 'hidden'
                  }`}
                >
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
                  ></div>
                  <div className='ml-8 fit-context'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 className='font-semibold'>Kiran Rambha Website</h6>
                    </div>
                    <div>
                      <h6 className='text-xs font-semibold text-gray-500'>
                        My personal website built using React, React Hooks &#38;
                        TailwindCSS while following all responsive web design
                        standards.
                      </h6>
                    </div>
                    <div>
                      <h6 className='text-sm mt-1 pb-2'>
                        <strong>Technologies:</strong> React, Tailwind CSS,
                        Firebase
                      </h6>
                    </div>
                    <div>
                      <h6 className='text-xs'>(Nov '20 - Present)</h6>
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
                    projectsIsVisible ? 'animated-9 fadeInDown' : 'hidden'
                  }`}
                >
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
                  ></div>
                  <div className='ml-8 fit-context'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 className='font-semibold'>
                        Just Stream - Alexa Skill{' '}
                        <a
                          href='https://skills-store.amazon.co.uk/deeplink/dp/B087P49PLW?deviceType=app&share&refSuffix=ss_copy'
                          target='_blank'
                          className='text-xs text-indigo-600 relative -top-0.5'
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                      </h6>
                    </div>
                    <div>
                      <h6 className='text-xs font-semibold text-gray-500'>
                        A movie search engine that lets users find where a movie
                        or a tv show is streaming using Alexa. Currently
                        Netflix, Amazon Prime Video and Apple TV+.
                      </h6>
                    </div>
                    <div>
                      <h6 className='text-sm mt-1 pb-2'>
                        <strong>Technologies:</strong> Node Js, Alexa Skill Kit,
                        etc.
                      </h6>
                    </div>
                    <div>
                      <h6 className='text-xs'>(Apr '2020 - Present)</h6>
                    </div>
                    <div className='mt-2 flex items-center text-yellow-500'>
                      <FontAwesomeIcon icon={faCodeBranch} />
                      <a
                        href='mailto:kiran.rambha@outlook.com?subject=I want to checkout Just Stream source code'
                        target='_blank'
                      >
                        <h6 className='font-semibold text-xs ml-2 underline'>
                          Github (Access on Request)
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`py-4 flex ${
                    projectsIsVisible ? 'animated-12 fadeInDown' : 'hidden'
                  }`}
                >
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
                  ></div>
                  <div className='ml-8 fit-context'>
                    <div className='mt-1.5 flex items-baseline'>
                      <h6 className='font-semibold'>
                        Local Exchange Trading System
                      </h6>
                    </div>
                    <div>
                      <h6 className='text-xs font-semibold text-gray-500'>
                        LETS is a web application where members can exchange
                        goods and services among themselves using a built in
                        local currency (LETS Credit)
                      </h6>
                    </div>
                    <div>
                      <h6 className='text-sm mt-1 pb-2'>
                        <strong>Technologies:</strong> C#, ASP.NET MVC
                      </h6>
                    </div>
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
