import Head from 'next/head'
import '../globals.scss'
import { Raleway } from 'next/font/google'

const font = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrystylist - About Me',
  description: "Andry Peña's Page - Hair style and Makeup artist",
}

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
