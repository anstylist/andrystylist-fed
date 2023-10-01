import React from 'react'
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaPinterestP
} from 'react-icons/fa6'
import './SocialNetworks.scss'

function SocialNetworks({ withText = false, className = '',  ...props }) {
  return (
    <section className={`social-networks ${className}`} { ...props }>
      <a href='https://www.instagram.com/andrystylist' target='_blank' aria-label='Adrystylist Instagram'>
        <FaInstagram className='social-networks--icon' /> {withText && <span>@Andrystylist Instagram</span>}
      </a>
      <a href='https://www.facebook.com/andrystylistf' target='_blank' aria-label='Adrystylist Facebook'>
        <FaFacebookF className='social-networks--icon' /> {withText && <span>@Andrystylist Facebook</span>}
      </a>
      <a href='https://www.tiktok.com/@andrystylist' target='_blank' aria-label='Adrystylist TikTok'>
        <FaTiktok className='social-networks--icon' /> {withText && <span>@Andrystylist Tiktok</span>}
      </a>
      <a href='https://www.pinterest.com/andrystylist' target='_blank' aria-label='Adrystylist Pinterest'>
        <FaPinterestP className='social-networks--icon' /> {withText && <span>@Andrystylist Pinterest</span>}
      </a>
    </section>
  )
}

export default SocialNetworks