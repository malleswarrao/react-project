import React from 'react'
import "./Footer.css";


export const Footer = () => {
  let FooterStyleSheet = {
    position: 'relative',
    bottom: 0,
    top: '60vh',
    width: '100%',
    height: '6rem',
    alignitems: 'center',
  justifycontent: 'center',
    
  }
  
  return (
    // <div className='container'>
    <div className='Footer'>
    <div className='bg-dark text-light text-center'  style={FooterStyleSheet}>
        <div className='p-4 TEXTs m-0' >Copyright &copy; Mytodolists.com</div>
        </div>
        </div>
        // </div>
  )
}
