'use client'

import Image from 'next/image';
import './Loading.scss'

function Loading({ className }) {
  return (
    <div className={`loading ${className}`}>
      <Image src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838653/animation4_54fb5c367a.svg" alt="Waiting for API response..." fill />
    </div>
  )
}

export default Loading