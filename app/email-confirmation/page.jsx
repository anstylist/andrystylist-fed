import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import EmailConfirmation from '@/components/EmailConfirmation/EmailConfirmation';

import { CartProductsProvider } from '@/context/CartProductsContext'
import { AuthProvider } from '@/context/AuthContext'

export default function LoginPage() {
  return (
    <AuthProvider>
      <CartProductsProvider>
        <Header />
        <main>
          <EmailConfirmation />
        </main>
        <Footer />
      </CartProductsProvider>
    </AuthProvider>
  )
}
