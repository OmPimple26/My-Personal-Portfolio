import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center border-t border-gray-800">
      <p className='text-green-500'>© {new Date().getFullYear()} Om Pimple. All Rights Reserved.</p>
      <div className="flex justify-center mt-3 gap-6">
        <a href="https://github.com/Ompimple26" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/om-pimple-0042822b3" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
          LinkedIn
        </a>
        <a href="/Om_Pimple_Resume.pdf" download className="hover:text-primary">
          Resume
        </a>
      </div>
    </footer>
  )
}

export default Footer