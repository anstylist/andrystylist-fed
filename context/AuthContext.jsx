'use client'

import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({})

  useEffect(() => {
    setAuthData({
      fullName: localStorage?.getItem('fullName') || '',
      email: localStorage?.getItem('email') || '',
      status: localStorage?.getItem('status') || '',
      token: localStorage?.getItem('token') || '',
      roles: JSON.parse(localStorage?.getItem('roles') || '[]')
    })
  }, [])

  const updateAuthData = ({ fullName = '', email = '', status = '', token = '', roles = [] } = {}) => {
    setAuthData({
      fullName,
      email,
      status,
      token,
      roles
    })

    localStorage?.setItem('fullName', fullName)
    localStorage?.setItem('email', email)
    localStorage?.setItem('status', status)
    localStorage?.setItem('token', token)
    localStorage?.setItem('roles', JSON.stringify(roles))
  }

  return (
    <AuthContext.Provider
      value={{ authData, updateAuthData, setAuthData }}
    >
      {children}
    </AuthContext.Provider>
  )
}
