import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMapPin } from '@fortawesome/free-solid-svg-icons';

export default function Experience({ darkMode }) {
  return (
    <section className='Experience'>
      <div>
        <div className='font-header font text-xl pb-3'>
          <FontAwesomeIcon icon={faLaptopCode} />
          <u className='pl-2'>Experience</u>
        </div>
        <div className='pb-10 flex'>
          <div
            className={`w-1 ${darkMode}:bg-gray-200 bg-gray-500 rounded-full md:ml-6 opacity-25`}
          ></div>
          <div className='-ml-2'>
            <div className='py-4 flex'>
              <div
                className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
              ></div>
              <div className='ml-8'>
                <div className='mt-1.5 flex items-baseline'>
                  <h6 class='font-semibold'>Accenture UK</h6>
                  <h6 class='text-xs ml-2'>(Dec '19 - Present)</h6>
                </div>
                <h6 class='text-sm'>Senior Software Engineer Analyst</h6>
                <div class='mt-2 flex items-center'>
                  <FontAwesomeIcon icon={faMapPin} />
                  <h6 class='font-semibold text-xs ml-2'>London, UK</h6>
                </div>
                <h6 class='text-xs mt-2'>
                  <strong>Specialized in:</strong> Nodejs, Reactjs, Alexa Skill
                  Kit, AWS
                </h6>
              </div>
            </div>
            <div className='py-4 flex'>
              <div
                className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
              ></div>
              <div className='ml-8'>
                <div className='mt-1.5 flex items-baseline'>
                  <h6 class='font-semibold'>Accenture UK</h6>
                  <h6 class='text-xs ml-2'>(Dec '18 - Nov '19')</h6>
                </div>
                <h6 class='text-sm'>Software Engineer Analyst</h6>
                <div class='mt-2 flex items-center'>
                  <FontAwesomeIcon icon={faMapPin} />
                  <h6 class='font-semibold text-xs ml-2'>London, UK</h6>
                </div>
                <h6 class='text-xs mt-2'>
                  <strong>Specialized in:</strong> Microservice Architecture,
                  Chatbots
                </h6>
              </div>
            </div>
            <div className='py-4 flex'>
              <div
                className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
              ></div>
              <div className='ml-8'>
                <div className='mt-1.5 flex items-baseline'>
                  <h6 class='font-semibold'>Accenture UK</h6>
                  <h6 class='text-xs ml-2'>(Oct '17 - Nov '18')</h6>
                </div>
                <h6 class='text-sm'>Software Engineer Associate</h6>
                <div class='mt-2 flex items-center'>
                  <FontAwesomeIcon icon={faMapPin} />
                  <h6 class='font-semibold text-xs ml-2'>London, UK</h6>
                </div>
                <h6 class='text-xs mt-2'>
                  <strong>Specialized in:</strong> Murex, Python, HTML,
                  Javascript, CSS
                </h6>
              </div>
            </div>
            <div className='py-4 flex'>
              <div
                className={`relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 bg-black ${darkMode}:bg-white`}
              ></div>
              <div className='ml-8'>
                <div className='mt-1.5 flex items-baseline'>
                  <h6 class='font-semibold'>Accenture UK</h6>
                  <h6 class='text-xs ml-2'>(Jun '15 - Sep '16')</h6>
                </div>
                <h6 class='text-sm'>
                  Software Engineer (Industrial Placement)
                </h6>
                <div class='mt-2 flex items-center'>
                  <FontAwesomeIcon icon={faMapPin} />
                  <h6 class='font-semibold text-xs ml-2'>London, UK</h6>
                </div>
                <h6 class='text-xs mt-2'>
                  <strong>Specialized in:</strong> C#, ASP.NET, HTML, CSS,
                  jQuery, AJAX
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}