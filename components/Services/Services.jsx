import Image from 'next/image'
import './Services.scss'
import Button from '../Button/Button'

function Services({ showButton, showMoreServices }) {
  
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
              {`I offer a wide range of hair color services, from simple root touch-ups to complex balayage and ombre techniques. I use the highest quality products to ensure that your hair is healthy and shiny, and I work with you to create a color that you love.`}
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
                {`Whether you're looking for a trim, a new style, or a complete makeover, I can help. I have extensive experience cutting all types of hair, and I'm skilled in both classic and modern styles. I'll work with you to find a haircut that flatters your face shape and hair type, and I'll teach you how to style it at home.`}
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
                {`Whether you're going to a special event or just want to look your best, I can create a hairstyle that is both flattering and unique. I offer a variety of styling services, including blowouts, updos, and braids.`}
              </p>
            </div>
            <h3 className='services__title' tabIndex={0}>
              Hairstyle
            </h3>
          </section>
        </section>
        {showButton && <section className='services__container--row more-service-link__box'>
          <Button className='services__link' isLink href='/services' type='default'> 
            See more services
          </Button>
        </section>}
        {showMoreServices && <section className='services__container--row'>
          <section className='services__color services__item'>
            <div className='services__img-box' tabIndex={1}>
              <Image
                className='services__img'
                src="https://res.cloudinary.com/dq66wlb15/image/upload/v1696206313/Screen_Shot_2023-10-01_at_7.24.47_PM_usfyxq.png"
                alt="Makeup Service"
                fill
              />
              <p className='services__description'>
                {`I offer a professional makeup service applying products of recognized brands, I will create a look that makes you feel safe and radiant, for any occasion and skin type adapted to you and your needs.`}
              </p>
            </div>
            <h3 className='services__title' tabIndex={0}>
              Makeup
            </h3>
          </section>
          <section className='services__haircut services__item'>
            <div className='services__img-box' tabIndex={1}>
              <Image
                className='services__img'
                src="https://res.cloudinary.com/dq66wlb15/image/upload/v1696217909/Screen_Shot_2023-10-01_at_10.38.07_PM_gd2pga.png"
                alt="Courses Service"
                fill
              />
              <p className='services__description'>
              {`Learn to do your makeup and hair like a professional with our personalized courses (in-person and virtual). Basic, advanced techniques for any occasion. The courses are personalized so that you learn the techniques you need, there are braids, makeup and hairstyle courses. Courses are available for all levels, from beginners to advanced.`}
              </p>
            </div>
            <h3 className='services__title' tabIndex={0}>
              Courses
            </h3>
          </section>
          <section className='services__hairstyle services__item'>
            <div className='services__img-box' tabIndex={1}>
              <Image
                className='services__img'
                src="https://res.cloudinary.com/dq66wlb15/image/upload/v1696211709/Screen_Shot_2023-10-01_at_8.54.55_PM_t1fx9n.png"
                alt="Hairstyle Service"
                fill
              />
              <p className='services__description'>
              {`Find everything you need for your beauty in one place We offer a wide selection of makeup, skin care and hair products from top brands. Find what you are looking for to look radiant and confident.`}
              </p>
            </div>
            <h3 className='services__title' tabIndex={0}>
              Products
            </h3>
          </section>
        </section>}
      </div>
    </section>
  )
}

export default Services