import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import AboutMe from '@/components/AboutMe/AboutMe'
import HomeGallery from '@/components/Jumbotron/HomeGallery'
import Services from '@/components/Services/Services'
import BeforeAfter from '@/components/BeforeAfter/BeforeAfter'
import Testimony from '@/components/Testimony/Testimony'
import ContactUs from '@/components/ContactUs/ContactUs';

import { CartProductsProvider } from '../context/CartProductsContext'
import { AuthProvider } from '../context/AuthContext'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
  return (
    <AuthProvider>
      <CartProductsProvider>
        <Header />
        <main>
          <h1 className='home__main-title'>Andry Peña Home Page</h1>
          <HomeGallery />
          <AboutMe />
          <Services />
          <BeforeAfter />
          <Testimony />
          <ContactUs />
        </main>
        <Footer />
      </CartProductsProvider>
    </AuthProvider>
  )
}
