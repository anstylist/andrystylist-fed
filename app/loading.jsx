import Image from 'next/image';
import React from 'react'

import './globals.scss'

function Loading() {
  return (
    <main className='loading-page'>
      <Image src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838653/animation4_54fb5c367a.svg" alt="Loading page view..." fill />
    </main>
  )
}

export default Loading