import Head from 'next/head'
import './globals.scss'
import { Raleway } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';

const font = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrystylist - Home',
  description: "Andry Peña's Page - Hair style and Makeup artist",
  keywords: 'hair, skincare, style, beauty, haircut, hairstyle, makeup, makeup artist, glam, glamour, andry, peña, bride, andrystylist, maquillaje, peinados, cortes, productos, entrepreneurship, woman, content creator, influencer, creadora de contenido, fiance, novia',
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
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index" />
        <meta name="author" content={metadata.title} />
        <meta name="og:title" property="og:title" content={metadata.description} />
        <meta name="og:description" property="og:description" content={metadata['og:description']} />
        <meta name="og:image" property="og:image" content={metadata['og:image']} />
        <meta name="twitter:image" property='twitter:image' content={metadata['twitter:image']} />
        <meta name="twitter:card" property='twitter:card' content={metadata['twitter:card']} />
        <meta name="twitter:title" property='twitter:title' content={metadata['twitter:title']} />
        <meta name="twitter:description" property='twitter:description' content={metadata['twitter:description']} />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={font.className}>
        <div id="root">
          <GoogleAnalytics />
          {children}
        </div>
      </body>
    </html>
  )
}
