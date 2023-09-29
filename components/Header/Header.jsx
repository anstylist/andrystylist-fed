'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Header.scss'
import MainMenu from './MainMenu'
import HeaderRight from './HeaderRight'
import logo from '../../assets/logo-header.png'

const RIGHT_MENU = 'RIGHT_MENU'
const MAIN_MENU = 'MAIN_MENU'

function Header () {
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <>
      <header className='header'>
        <section className='header__container'>
          <section className='header__item header-section'>
            <Link href="/" className="header-section__logo">
              <Image
                src={logo}
                fill
                alt="AndryStylist"
                aria-label='Logo AndryStylist'
                className="header-section__logo--img"
              />
            </Link>
          </section>
          <MainMenu
            onMenuOpen={() => setOpenMenu(MAIN_MENU)}
            mustHideMenu={openMenu !== MAIN_MENU}
          />
          <HeaderRight
            onMenuOpen={() => setOpenMenu(RIGHT_MENU)}
            mustHideMenu={openMenu !== RIGHT_MENU}
          />
        </section>
      </header>
    </>
  )
}

export default Header
