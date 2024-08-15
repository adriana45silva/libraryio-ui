'use client'

import React, { useState, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) 
  }

  return (
    <header className="bg-gray-800 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold">
            <a href="/" className="block py-2 hover:text-gray-300 text-white">Libraries.io UI</a>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            <a href="/search" className="hover:text-gray-300 text-white">Search libraries 🔍</a>
          </nav>
          
          {/* Mobile Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300" 
            onClick={() => toggleMenu()}
          >
            {isMenuOpen ? (
              <X size={24} className='text-white' />
            ) : (
              <Menu size={24} className='text-white' />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <a href="/search" className="block py-2 hover:text-gray-300 text-white">Search libraries 🔍</a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header