import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__thing1">
          <h3>Work Experience</h3>
          <div className="experience__work-content">
            <article className='experience__details'>
              <div>
                <h4>Product Manager</h4>
                <a href="https://linkr.com/" className='text-dark-variant' target="_blank">Linkr.com | March 2023 - Present</a>
                <p>My core responsibilities are to conduct market research and use my findings to pitch new
                  features within Linkr as well as refine old ones. I am also charged with overseeing
                  the development and launch of these features!
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4>Engineering Teaching Assistant</h4>
                <small>Brown School of Engineering | September 2022 - December 2022</small>
                <p>TA and mentor to 2 groups of 3-5 students enrolled in Intro to Engineering ENGN0030.
                  I held weekly meetings to go over content learned during that week's lecture and how
                  to apply such content to their weekly lab/project. During this time, I also taught
                  my students how to utilize the machinery within Brown's Design Workshop.
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4>3D Vision Intern</h4>
                <small>Groov (Wharton Venture Startup) | June 2022 - September 2022</small>
                <p>
                  I led and developed the scanning functionality of the app. This was used to 
                  produce the optimal scanning process based on certain requirements.
                  This process is currently being used to develop high-quality custom insoles.
                  I also contributed to brand vision, product design, and failsafe mechanism strategies.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__thing2">
        <h3>Core Competencies</h3>
          <div className="experience__skill-content">
          <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                
              </div>
            </article>
          <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>MS Office Suite</h4>
                
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Digital Logic</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>C/C++</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Circuitry/Analysis</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>ARM Assembly</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Figma</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>MatLab</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Fusion360 CAD</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Rapid Prototyping</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Pitching</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Data Structures & Algorithms</h4>
                
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience