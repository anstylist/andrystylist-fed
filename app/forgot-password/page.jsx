import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ForgotPasswordForm from '@/components/ForgotPasswordForm/ForgotPasswordForm';

import { CartProductsProvider } from '@/context/CartProductsContext'
import { AuthProvider } from '@/context/AuthContext'

export default function LoginPage() {
  return (
    <AuthProvider>
      <CartProductsProvider>
        <Header />
        <main className='page__main'>
          <ForgotPasswordForm />
        </main>
        <Footer />
      </CartProductsProvider>
    </AuthProvider>
  )
}
