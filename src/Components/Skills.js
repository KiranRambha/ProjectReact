import React from 'react';
import IsVisible from 'react-is-visible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

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
          {(isVisible) => (
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-4 font-bold'>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-1` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['nodejs.png'].default}
                      alt='NodeJs'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>Node Js</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-2` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['react.png'].default}
                      alt='React'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>React</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-3` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['mongodb.png'].default}
                      alt='MongoDb'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>Mongo Db</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-4` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['alexa.png'].default}
                      alt='Alexa Skill Kit'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>Alexa Skill Kit</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-5` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['angular.png'].default}
                      alt='Angular'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>Angular</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-6` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['java.png'].default}
                      alt='Java'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>Java</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-7` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['javascript.png'].default}
                      alt='JavaScript'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>JavaScript</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-8` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['postgresql.png'].default}
                      alt='Postgresql'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>Postgresql</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-9` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['html5.png'].default}
                      alt='HTML'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>HTML</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-10` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['css.png'].default}
                      alt='CSS'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>CSS</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-11` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['docker.png'].default}
                      alt='DOCKER'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>Docker</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-12` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['aws.png'].default}
                      alt='AWS'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>AWS</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-13` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['csharp.png'].default}
                      alt='CSharp'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>C-Sharp</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-14` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['nlp.png'].default}
                      alt='NLP'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>NLP/Chatbots</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-15` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['git.png'].default}
                      alt='GIT'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>GIT</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
              <div
                className={`border-solid border-2 border-gray-300 rounded-lg ${
                  isVisible ? `fade-in-16` : `hidden`
                }`}
              >
                <div className='p-2.5 md:p-2'>
                  <div className='float-left'>
                    <img
                      src={images['jenkins.png'].default}
                      alt='Jenkins'
                      className='w-8 md:w-10'
                    />
                  </div>
                  <div className='float-left p-2 text-xs md:text-base'>
                    <p>Jenkins</p>
                  </div>
                  <div className='clear-both'></div>
                </div>
              </div>
            </div>
          )}
        </IsVisible>
      </div>
    </section>
  );
}
