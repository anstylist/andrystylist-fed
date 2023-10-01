'use client'

import React from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import { RiDoubleQuotesL } from 'react-icons/ri'
import './Testimony.scss'

function Testimony() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "3rem",
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
  }

  return (
    <section className='testimony'>
      <div className='testimony__container'>
        <h2 className='testimony__section-title'>
          Testimony
        </h2>
        <Slider {...settings} className='testimony__slider'>
          <div>
            <section className='testimony__item'>
              <div className='testimony__img-box' tabIndex={1}>
                <Image
                  className='testimony__img'
                  src="https://res.cloudinary.com/dq66wlb15/image/upload/c_thumb,w_200,g_face/v1696136803/IMG_20231001_000427_j0uiiu.jpg"
                  alt="Arianna Medina Testimony"
                  fill
                />
              </div>
              <p className='testimony__comment'>
                <div>
                  <RiDoubleQuotesL className='quotes' /> I've been going to Andry for years, and I've always been so happy with my haircuts and styles. They're always able to give me the exact look I'm going for, and they're also really great at suggesting new styles that I might like. I highly recommend Andry to anyone looking for a talented and experienced stylist."
                </div>
              </p>
              <h3 className='testimony__title' tabIndex={0}>
                Arianna Medina
              </h3>
            </section>
          </div>
          <div>
            <section className='testimony__item'>
              <div className='testimony__img-box' tabIndex={1}>
                <Image
                  className='testimony__img'
                  src="https://res.cloudinary.com/dq66wlb15/image/upload/c_thumb,w_200,g_face/v1696134788/IMG_20230930_233012_v9ord1.jpg"
                  alt="Josvey Blanco Testimony"
                  fill
                />
              </div>
              <p className='testimony__comment'>
                <div>
                  <RiDoubleQuotesL className='quotes' /> Andry is the best stylist I've ever been to! They're so knowledgeable about hair and they always take the time to listen to what I want. I've never been disappointed with a haircut or style from them. I highly recommend Andry to anyone looking for a stylist who can give them the look they want."
                </div>
              </p>
              <h3 className='testimony__title' tabIndex={0}>
                Josvey Blanco
              </h3>
            </section>
          </div>
          <div>
            <section className='testimony__item'>
              <div className='testimony__img-box' tabIndex={1}>
                <Image
                  className='testimony__img'
                  src="https://res.cloudinary.com/dq66wlb15/image/upload/v1696134787/IMG_20230930_233206_vet5gk.jpg"
                  alt="Yenith Gómez Testimony"
                  fill
                />
              </div>
              <p className='testimony__comment'>
                <div>
                  <RiDoubleQuotesL className='quotes' /> I've been going to Andry for a few years now, and I've always been so happy with their services. They're a talented stylist who always knows how to make me look and feel my best. I also appreciate that they're always on time and professional. I highly recommend Andry to anyone looking for a great stylist."
                </div>
              </p>
              <h3 className='testimony__title' tabIndex={0}>
                Yenith Gómez
              </h3>
            </section>
          </div>
          <div>
            <section className='testimony__item'>
              <div className='testimony__img-box' tabIndex={1}>
                <Image
                  className='testimony__img'
                  src="https://res.cloudinary.com/dq66wlb15/image/upload/v1696136802/IMG_20231001_000226_zdoblj.jpg"
                  alt="María Casique Testimony"
                  fill
                />
              </div>
              <p className='testimony__comment'>
                <div>
                  <RiDoubleQuotesL /> I offer a wide range of hair color testimony, from simple root touch-ups to complex balayage and ombre techniques. I use the highest quality products to ensure that your hair is healthy and shiny, and I work with you to create a color that you love."
                </div>
              </p>
              <h3 className='testimony__title' tabIndex={0}>
                María Casique
              </h3>
            </section>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Testimony