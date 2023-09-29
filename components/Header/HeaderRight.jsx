/* eslint-disable react/prop-types */
'use client'

import React, { useEffect, useState, useContext } from 'react'
import CartProductsContext from '../../context/CartProductsContext'
import { AuthContext } from '../../context/AuthContext'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Link from 'next/link'
import { isExpired } from 'react-jwt'
import './HeaderRight.scss'

function HeaderRight({ onMenuOpen, mustHideMenu }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const { productsList, setProductsList } = useContext(CartProductsContext)
  const { authData, updateAuthData } = useContext(AuthContext)

  const isLoggedIn = authData.token && !isExpired(authData.token)

  const handleLogout = () => {
    updateAuthData()
    setProductsList([])
    localStorage.clear()
  }

  const handleMenuVisible = () => {
    setIsMenuVisible((isVisible) => !isVisible)
  }

  useEffect(() => {
    isMenuVisible && onMenuOpen()
  }, [isMenuVisible])

  useEffect(() => {
    mustHideMenu && setIsMenuVisible(false)
  }, [mustHideMenu])

  return (
    <nav className='header__item header__nav-right'>
      <button
        className='header__nav-right-mobile'
        onClick={handleMenuVisible}
        aria-label='Toggle Secondary Menu'
      >
        <BsThreeDotsVertical className='header__nav-right-icon' />
      </button>
      <ul className={`header__nav-right-menu ${isMenuVisible && 'header__nav-right-menu--visible'}`} aria-label='Search'>
        <li className='header__nav-right-menu__item'>
          <Link href='/cart' className='header__nav-right-link header__nav-right-link--cart' aria-label='Shopping Cart'>
            <HiOutlineShoppingCart className='header__nav-right-icon' />
            <div className='header__nav-right-counter-tag'>{productsList.length}</div>
          </Link>
        </li>
        {isLoggedIn && (
          <>
            <li className='header__nav-right-menu__item'>
              <Link href='/user-profile' className='header__nav-right-link header__nav-right-menu__my-account'>
                <div className='header__nav-right-menu__user-avatar-container'>
                  <img
                    className='header__nav-right-menu__user-avatar'
                    src={`https://robohash.org/${authData.fullName}`}
                    alt={authData.fullName}
                  />
                </div>
                My Account
              </Link>
            </li>
            <li className='header__nav-right-menu__item' onClick={handleLogout}>
              <Link href='/' className='header__nav-right-link '>
                Logout
              </Link>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li className='header__nav-right-menu__item'>
              <Link href='/login' className='header__nav-right-link '>
                Sign In
              </Link>
            </li>
            <li className='header__nav-right-menu__item'>
              <Link href='/register' className='header__nav-right-link '>
                Sign Up
              </Link>
            </li>
          </>
        )}

      </ul>
    </nav>
  )
}

export default HeaderRight
