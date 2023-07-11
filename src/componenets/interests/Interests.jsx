import React from 'react'
import './interests.css'
import SNOW from '../../assets/SNOW.PNG'
import TKD from '../../assets/TKD.JPG'
import SKATE from '../../assets/SKATE.png'

const data = [
  {
    id:1,
    image: SKATE,
    title: 'Skateboarding',
    descr: 'I love to skate around and explore Providence/Rhode Island in between classes or whenever I need to take a break!'
  },
  {
    id:2,
    image: TKD,
    title: 'Competitive Taekwondo',
    descr: 'I started Taekwondo when I was 4! I am now a 3rd degree black belt certfied by the Kukkiwon World Taekwondo Headquarters. In 2022 I joined the Brown Taekwondo Team and won bronze at the National Collegiate Taewondo Championship for Bantamweight sparring.'
  },
  {
    id:3,
    image: SNOW,
    title: 'Snowboarding',
    descr: 'I started snowboarding a few years ago and have loved it ever since! So far, my favorite spot is Hunter Mountain in NY. I hope to go out west soon!'
  }
]


const Interests = () => {
  return (
        <section id='interests'>
          <h5>Work Hard Play Hard</h5>
          <h2>Interests and Hobbies</h2>
          <div className="container interests__container">
            {
              data.map(({id, image, title, descr}) => {
                return(
                  <article key={id} className='interests__item'>
                    <div className="interests__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <p>{descr}</p>
                  </article>
                )
              })
            }
          </div>
          
        </section>
    
  )
}

export default Interests