import React from 'react'

export const Footer = () => {
  let FooterStyleSheet = {
    position: 'relative',
    bottom: 0,
    top: '70vh',
    width: '100%',
    height: '6rem',
    alignitems: 'center',
  justifycontent: 'center',
    
  }
  
  return (
    <div className='bg-dark text-light' style={FooterStyleSheet}>
        <p className='text-center py-3' >
            Copyright &copy; Mytodolists.com</p>
        </div>
  )
}
