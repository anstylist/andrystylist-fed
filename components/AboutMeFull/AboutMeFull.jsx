'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutMeFull.scss'

function AboutMeFull() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="about-me">
      <div className="about-me__container">
        <div className='about-me__img-container' data-aos="fade-up-right">
          <Image
            className='about-me__img'
            src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838747/117367474_1011554065953423_3929220737316118995_n_98e1b031a0.jpg"
            alt="Andry Peña - Andrystylist"
            fill
          />
        </div>
        <div className="about-me__message">
          <section className='about-me__message--box' data-aos="fade-up">
            <h2>About Me</h2>
            <div>
              <p>
                {`I am Andry Peña, a mother of two children and a professional makeup artist and stylist with 12 years of experience. I have loved makeup since I was a little girl. I remember when I was a child, I would spend hours playing with my grandmother's eyeshadows and lipsticks. I would put together the best outfits with her dresses and accessories. These are definitely my best memories.`}
              </p>
                
              <p>
                {`I have always been fascinated by the power of makeup to transform the face and enhance people's natural beauty. I have had the opportunity to work with clients of all ages and styles, and each experience is magical.`}
              </p>

              <p>
                {`When dealing with clients, it is important to be empathetic and to listen. Each person is unique and has their own needs and preferences. It is essential to take the time to get to know each client and understand their wishes.`}
              </p> 

              <p>
                {`After so many years, I can say that makeup can be a powerful tool for connecting with people. Every time I work with a client, I have the opportunity to learn about their story and their dreams. It is a privilege to be a part of those special moments and to know that the path of life presents me with people who add beautiful energy.`}
              </p>

              <p>
                {`My goal is to help people feel more confident and beautiful with their makeup or hair. I believe that makeup can be a powerful tool for expressing our individuality and creativity.`}
              </p> 

              <p>
                {`In my free time, I enjoy spending time with my family and friends. I also love to travel and enjoy the beauty of each place. I am also passionate about music and dance. I can say that there is no single discipline that defines me, but if I can name one thing that helps me drain, release, and forget my worries, it is dancing.`}
              </p> 

              <p>
                {`I hope you enjoy my work and that you will allow me to help you enhance your natural beauty.`}
              </p> 
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutMeFull