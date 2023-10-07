import Head from 'next/head'
import '../globals.scss'
import { Raleway } from 'next/font/google'

const font = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Sign Up - Andrystylist',
  description: "Sign up page - Andry Peña's Page - Hair style and Makeup artist",
  keywords: 'hair, skincare, style, beauty, haircut, hairstyle, makeup, makeup artist, glam, glamour, andry, peña, bride, andrystylist, maquillaje, peinados, cortes, productos, entrepreneurship, woman, content creator, influencer, creadora de contenido, fiance, novia, signup',
  author: 'Andry Peña',
  'og:title': 'Andrystylist',
  'og:description': "Andry Peña's Page - Hair style and Makeup artist",
  'og:image': 'https://res.cloudinary.com/dq66wlb15/image/upload/v1695980669/Screen_Shot_2023-09-27_at_12.25.03_AM_rlur7y.png',
  'twitter:image': 'https://res.cloudinary.com/dq66wlb15/image/upload/v1695980669/Screen_Shot_2023-09-27_at_12.25.03_AM_rlur7y.png',
  'twitter:card': 'https://res.cloudinary.com/dq66wlb15/image/upload/v1695980669/Screen_Shot_2023-09-27_at_12.25.03_AM_rlur7y.png',
  'twitter:title': 'Andrystylist',
  'twitter:description': "Andry Peña's Page - Hair style and Makeup artist",
  'og:url': 'https://andrystylist.vercel.app/',
}

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
