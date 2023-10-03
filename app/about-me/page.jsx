import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ContactUs from '@/components/ContactUs/ContactUs';
import './page.scss'
import { CartProductsProvider } from '../../context/CartProductsContext'
import { AuthProvider } from '../../context/AuthContext'
import AboutMeFull from '@/components/AboutMeFull/AboutMeFull';

export default function About() {
  return (
    <AuthProvider>
      <CartProductsProvider>
        <Header />
        <main>
          <AboutMeFull />
          <ContactUs />
        </main>
        <Footer />
      </CartProductsProvider>
    </AuthProvider>
  )
}
