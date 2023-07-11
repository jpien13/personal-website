import React from 'react'
import './about.css'
import ME from '../../assets/me2.JPG'
import {MdWork} from 'react-icons/md'
import {RiTeamFill} from 'react-icons/ri'
import {FaLightbulb} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know More</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaLightbulb className='about__icon'/>
              <h5>Entrepreneurial</h5>
            </article>
            <article className='about__card'>
              <MdWork className='about__icon'/>
              <h5>Self-Starter</h5>
            </article>
            <article className='about__card'>
              <RiTeamFill className='about__icon'/>
              <h5>Collaborative</h5>
            </article>
          </div>
          <p>
            I'm a Computer Engineering major at Brown University - class of '25! 
            I'm passionate about creating leading-edge products and solutions while being 
            at the intersection of software and hardware innovations. Outside of the classroom, I am involved
            in the Providence/Boston startup scene.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About