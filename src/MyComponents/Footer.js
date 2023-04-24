import React from 'react'

export const Footer = () => {
  let FooterStyleSheet = {
    position: 'absolute',
    top: '100vh',
    width: '100%'
  }
  return (
    <div className='bg-dark text-light' style={FooterStyleSheet}>
        <p className='text-center py-3'>
            Copyright &copy; Mytodolists.com</p>
        </div>
  )
}
