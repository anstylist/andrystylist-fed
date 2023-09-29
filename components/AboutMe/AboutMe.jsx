'use client'
import React from 'react'
import './AboutMe.scss'
import Image from 'next/image'
import Button from '../Button/Button';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <div className='about-me__img-container'>
          <Image
            className='about-me__img'
            src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838744/large_73211971_625104701354480_2771310384270565021_n_8034efc3e3.jpg"
            alt="Andry Peña"
            fill
          />
        </div>
        <div className="about-me__message">
          <section className='about-me__message--box'>
            <h2>About Me</h2>
            <div>
              <p>
                Hi, I'm Andry Peña, a stylist specialized in hair and makeup. I have been passionate about beauty for as long as I can remember, and I love helping my clients look and feel their best.
              </p>
              <p>
                I have over 12 years of experience in the beauty industry, and I have worked with a wide range of clients, from celebrities to everyday people. I am skilled in all aspects of color, hair and makeup, and I am always up for a challenge.
              </p>
            </div>
            <Button isLink href='/about-me' type='primary' className='about-me__message--button'>
              Read more...
            </Button>
          </section>
        </div>
      </div>
    </section>
  )
}

export default AboutMe