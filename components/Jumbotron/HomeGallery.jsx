'use client'

import React from 'react'
import Slider from "react-slick"
import './HomeGallery.scss'
import Button from '../Button/Button';

function HomeGallery() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: 'linear',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="home-gallery">
      <Slider {...settings} className='home-gallery__slider'>
        <div>
          <div className="home-gallery__slider--item item-0">
            <img src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695956357/holi-color-powder-explosion-with-rainbow-isolated-white-background-burst-vibrant-colors-generative-ai_58409-31573_eqxouf.jpg" className='background-video' />
            <img src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838748/large_126048659_3426041347512031_1902567701484988567_n_ba98f42a83.jpg" alt="Andry's Artistic Makeup - Andrystylist" className="first" />
            <img src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838746/large_116745727_305778577501454_5766456582798214895_n_ed49410e55.jpg"  alt="Andry's Artistic Makeup - Andrystylist" className="second" />
            <img src='https://res.cloudinary.com/dq66wlb15/image/upload/v1695838745/medium_106701455_698890784010441_7827307154597066723_n_4a27a558ad.jpg'  alt="Andry's Artistic Makeup - Andrystylist" className="third"/>
          </div>
        </div>
        <div>
          <div className="home-gallery__slider--item item-1">
            <img src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695845645/IMG_20230702_103112_04477dcd70.jpg" alt="Andry's Hair Style" className="first" />
            <img src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695845638/large_IMG_20230211_105059_0d1e3587bd.jpg"  alt="Andry's Hair Style" className="second" />
            <img src='https://res.cloudinary.com/dq66wlb15/image/upload/v1695845643/medium_IMG_20230702_103028_d120a62df6.jpg'  alt="Andry's Hair Style" className="third"/>
          </div>
        </div>
      </Slider>
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Andry Peña
          </text>
        </svg>
      </div>
      <div className="home-gallery__message">
        <div className="home-gallery__message--text">
          Are you ready for the best version of you?
        </div>
        <Button isLink href='/appointment' type='default'>
          Book your appointment
        </Button>

        <div className='home-gallery__message--social-networks'>

        </div>
      </div>
    </section>
  )
}

export default HomeGallery