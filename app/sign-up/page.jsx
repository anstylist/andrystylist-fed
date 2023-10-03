import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import SignUpForm from '@/components/SignUpForm/SignUpForm';

import { CartProductsProvider } from '@/context/CartProductsContext'
import { AuthProvider } from '@/context/AuthContext'

export default function LoginPage() {
  return (
    <AuthProvider>
      <CartProductsProvider>
        <Header />
        <main>
          <SignUpForm />
        </main>
        <Footer />
      </CartProductsProvider>
    </AuthProvider>
  )
}
