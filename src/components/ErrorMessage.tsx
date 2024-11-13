import React from 'react'

export const ErrorMessage = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='error'>
      {children}
    </div>
  )
}
