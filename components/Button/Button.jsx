import React from 'react'
import Link from 'next/link'
import './Button.scss'

function Button({
  children,
  type = 'default', // primary, secondary, default
  className,
  isLink,
  href = '',
  isButton,
  onClick = () => {},
  ...props } = {}
) {
  const uiClassNames = `ast-button ast-button__${type} ${className}`;

  return (
    <>
      {isButton && (
        <button
          className={uiClassNames}
          onClick={onClick}
          {...props}
        >
          {children}
        </button>
      )}
      {isLink && (
        <Link
          className={`${uiClassNames} ast-button__link`}
          href={href}
          {...props}
        >
          {children}
        </Link>
      )}
    </>
  )
}

export default Button