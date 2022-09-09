import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
    
  return (
    <footer className='footer bg-gray-700 p-4 text-primary-content footer-center'>copyright &copy; {currentYear}</footer>
  )
}

export default Footer