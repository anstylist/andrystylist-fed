import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Services from '@/components/Services/Services'
import ContactUs from '@/components/ContactUs/ContactUs';
import './page.scss'

import { CartProductsProvider } from '../../context/CartProductsContext'
import { AuthProvider } from '../../context/AuthContext'

export default function Service() {
  return (
    <AuthProvider>
      <CartProductsProvider>
        <Header />
        <main className='page__main'>
          <div className='page__title'>
            <h1 className='page__title-h1'>Our Services</h1>
          </div>
          <Services showMoreServices />
          <ContactUs />
        </main>
        <Footer />
      </CartProductsProvider>
    </AuthProvider>
  )
}
