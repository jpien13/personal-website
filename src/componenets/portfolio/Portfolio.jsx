import React from 'react'
import './portfolio.css'
import WEB from '../../assets/website.png'
import DOJO from '../../assets/dojo.jpg'
import GROOV from '../../assets/groov.jpg'
import BLAB from '../../assets/blab.png'
/* {} INDICATED JAVASCRIPT MODE*/


const data = [
  {
    id:1,
    image: WEB,
    title: 'React Personal Website',
    link1: 'https://jasonpien.com/',
    descr: 'I built this personal website using React, CSS and HTML! I do not have formal web development training but this was all created by looking through documentation, YouTube and with Google'
  },
  {
    id:2,
    image: DOJO,
    title: 'Innovation Dojo Pitch',
    link1: 'https://youtu.be/grkV24gw1Nc?t=4443',
    descr: 'Innovation Dojo is a student led startup accelerator at Brown. After a competitive selection process, I was accepted into the Fall 2022 cohort. My team and I spent a semester learning about startup ventures, VC finance, and pitching. The end goal was to develop and pitch a theoretical venture to a board of venture capitalists! Watch my team and I pitch our venture, Narwhal -- The Unicorn of The Ocean!'
  },
  {
    id:3,
    image: GROOV,
    title: '3D Vision Internship at Groov',
    link1: 'https://vimeo.com/792873651',
    descr: 'Groov is a startup at Wharton Venture Labs that brings the luxury of custom insoles to the athleisure market. Groov allows customers to quickly and easily order custom insoles by taking a scan of their feet from the comfort of their homes. My job was to develop the scanning guardrails which prevent scanning failures during the user experience.'
  },
  {
    id:4,
    image: BLAB,
    title: 'Brown Breakthrough Lab Venture',
    link1: 'https://entrepreneurship.brown.edu/b-lab/breakthrough-lab-2023/',
    descr: <p>
    {"Breakthrough Lab (B-Lab) is Brown University’s premier 8-week summer (June and July) accelerator program for Brown and RISD students developing high-impact ventures."}
    <br />
    <br />
    {"I am one of three co-founders of Puff ‘N Quit, an integrated system designed to curb users cravings, while weaning them off of their nicotine dependency. As head of hardware engineering, it is my responsibility to develop our venture’s hardware products. Additionally, I will be assisting in the development of our integrated mobile app. Please feel free to reach out if you are interested in learning more about this venture!"}
</p>
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, link1, descr}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{descr}</p>
                <a href={link1} className='btn' target='_blank'>Visit It Now!</a>
              </article>
            )
          })
        }
      </div> 
    </section>
  )
}
export default Portfolio
