import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import LoginForm from '@/components/LoginForm/LoginForm';

import { CartProductsProvider } from '@/context/CartProductsContext'
import { AuthProvider } from '@/context/AuthContext'

export default function LoginPage() {
  return (
    <AuthProvider>
      <CartProductsProvider>
        <Header />
        <main>
          <LoginForm />
        </main>
        <Footer />
      </CartProductsProvider>
    </AuthProvider>
  )
}
