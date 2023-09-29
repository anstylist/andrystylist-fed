import Head from 'next/head'
import './globals.scss'
import { Roboto_Serif } from 'next/font/google'

const font = Roboto_Serif({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrystylist - Home',
  description: "Andry Peña's Page - Hair style and Makeup artist",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="hair, skincare, style, beauty, hair cut, makeup, makeup artist, glam, glamour, andry, peña, bride, andrystylist, maquillaje, peinados, cortes, productos, entrepreneurship, woman, content creator, influencer, creadora de contenido, fiance, novia" />
        <meta name="robots" content="index" />
        <meta name="author" content={metadata.title} />
        <meta property="og:title" content={metadata.description} />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://res.cloudinary.com/dq66wlb15/image/upload/v1695980669/Screen_Shot_2023-09-27_at_12.25.03_AM_rlur7y.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={font.className}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
