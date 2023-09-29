import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer';
import AboutMe from '@/components/AboutMe/AboutMe'
import HomeGallery from '@/components/Jumbotron/HomeGallery'
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
          <HomeGallery />
          <AboutMe />
        </main>
        <Footer />
      </CartProductsProvider>
    </AuthProvider>
  )
}
