import React from 'react'
import './testimonials.css'
import DAN from '../../assets/dan.jpeg'
import JUDE from '../../assets/adelman.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avatar: DAN,
    name: 'Dan Cataldi (Groov)',
    review: 'Working with Jason, it was clear that he brought a unique combination of technical nuance, curiosity, and initiative. Having demonstrated his ability to create positive leverage from day one, Jason became a fundamental part of the team, owning a work stream while simultaneously stepping in to fill our growing startup’s needs wherever they arose. In a world in which the bridges we can draw between the technical and the human increasingly become our greatest assets, Jason contributes in a way that would make any employer lucky to have him. '
  },
  {
    avatar: JUDE,
    name: 'Jude Adelman (Head Engineering Mentor)',
    review: <p>Jason's passion for engineering, combined with his great teaching abilities, made him a standout mentor. He consistently demonstrated a high level of professionalism and work ethic, earning my trust quickly as well as the respect of other mentors and  his mentees. I wholeheartedly recommend Jason for any engineering position, confident that he will be a valuable asset to any organization fortunate enough to have him on their team.</p>
  }

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Employers</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return (
            <SwiperSlide key={index}className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials