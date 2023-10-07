import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import NewsletterSignup from '@/components/NewsletterSignup/NewsletterSignup';

import { CartProductsProvider } from '@/context/CartProductsContext'
import { AuthProvider } from '@/context/AuthContext'

import './page.scss'

export default function LoginPage() {
  return (
    <AuthProvider>
      <CartProductsProvider>
        <Header />
        <main className='page__main'>
          <NewsletterSignup>
            <header className='page__header'>
              <h1 className='page__header--title'>Appointment</h1>
              <h2 className='page__header--title'>Coming Soon</h2>
            </header>
          </NewsletterSignup>
        </main>
        <Footer />
      </CartProductsProvider>
    </AuthProvider>
  )
}
