import React, { useRef } from 'react';
import { useIsVisible } from 'react-is-visible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

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

  console.log(isVisible);

  return (
    <section className='Skills'>
      <div>
        <div className='font-header font text-xl pb-3'>
          <FontAwesomeIcon icon={faTools} />
          <u className='pl-2'>Skills</u>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 font-bold'>
          <div
            ref={nodeRef}
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-1`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['nodejs.png'].default}
                  alt='NodeJs'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>Node Js</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-2`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['react.png'].default}
                  alt='React'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>React</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-3`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['mongodb.png'].default}
                  alt='MongoDb'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>Mongo Db</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-4`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['alexa.png'].default}
                  alt='Alexa Skill Kit'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>Alexa Skill Kit</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-5`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['angular.png'].default}
                  alt='Angular'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>Angular</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-6`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['java.png'].default}
                  alt='Java'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>Java</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-7`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['javascript.png'].default}
                  alt='JavaScript'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>JavaScript</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-8`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['postgresql.png'].default}
                  alt='Postgresql'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>Postgresql</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-9`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['html5.png'].default}
                  alt='HTML'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>HTML</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-10`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['css.png'].default}
                  alt='CSS'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>CSS</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-11`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['docker.png'].default}
                  alt='DOCKER'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>Docker</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-12`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['aws.png'].default}
                  alt='AWS'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>AWS</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-13`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['csharp.png'].default}
                  alt='CSharp'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>C-Sharp</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-14`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['nlp.png'].default}
                  alt='NLP'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>NLP/Chatbots</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-15`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['git.png'].default}
                  alt='GIT'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>GIT</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
          <div
            className={`border-solid border-2 border-gray-300 rounded-lg ${
              isVisible && `fade-in-16`
            }`}
          >
            <div className='p-2'>
              <div className='float-left'>
                <img
                  src={images['jenkins.png'].default}
                  alt='Jenkins'
                  className='w-10'
                />
              </div>
              <div className='float-left p-2'>
                <p>Jenkins</p>
              </div>
              <div className='clear-both'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
