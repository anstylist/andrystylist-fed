import React from 'react'
import Image from 'next/image'
import './Services.scss'
import Button from '../Button/Button';

function Services() {
  return (
    <section className='services'>
      <div className='services__container'>
        <section className='services__container--row'>
          <section className='services__color services__item'>
            <div className='services__img-box' tabIndex={1}>
              <Image
                className='services__img'
                src="https://res.cloudinary.com/dq66wlb15/image/upload/v1696125792/Screen_Shot_2023-09-30_at_8.58.36_PM_mbz1a3.png"
                alt="Hair Color Service"
                fill
              />
              <p className='services__description'>
                I offer a wide range of hair color services, from simple root touch-ups to complex balayage and ombre techniques. I use the highest quality products to ensure that your hair is healthy and shiny, and I work with you to create a color that you love.
              </p>
            </div>
            <h3 className='services__title' tabIndex={0}>
              Color
            </h3>
          </section>
          <section className='services__haircut services__item'>
            <div className='services__img-box' tabIndex={1}>
              <Image
                className='services__img'
                src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695967428/b2eb0625f1fe2df5e3699f67191d881b_nmg6fr.jpg"
                alt="Haircut Service"
                fill
              />
              <p className='services__description'>
                Whether you're looking for a trim, a new style, or a complete makeover, I can help. I have extensive experience cutting all types of hair, and I'm skilled in both classic and modern styles. I'll work with you to find a haircut that flatters your face shape and hair type, and I'll teach you how to style it at home.
              </p>
            </div>
            <h3 className='services__title' tabIndex={0}>
              Haircut
            </h3>
          </section>
          <section className='services__hairstyle services__item'>
            <div className='services__img-box' tabIndex={1}>
              <Image
                className='services__img'
                src="https://res.cloudinary.com/dq66wlb15/image/upload/v1696125792/Screen_Shot_2023-09-30_at_9.00.03_PM_nu14bq.png"
                alt="Hairstyle Service"
                fill
              />
              <p className='services__description'>
                Whether you're going to a special event or just want to look your best, I can create a hairstyle that is both flattering and unique. I offer a variety of styling services, including blowouts, updos, and braids.
              </p>
            </div>
            <h3 className='services__title' tabIndex={0}>
              Hairstyle
            </h3>
          </section>
        </section>
        <section className='services__container--row'>
          <Button className='services__link' isLink href='/services' type='default'>
            See more services
          </Button>
        </section>
      </div>
    </section>
  )
}

export default Services