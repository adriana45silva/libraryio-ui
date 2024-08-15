'use client'

import React from 'react'
import { faker } from '@faker-js/faker'
import { capitalizeFirstLetters } from '@/utils'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-left">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <nav>
            <h3 className="text-lg font-semibold mb-4">Libraries.io UI</h3>
            <p className="text-sm text-gray-400">
              {faker.location.street()}<br />
              {faker.location.city()}<br />
              Phone: {faker.phone.number()}<br />
              Email: {faker.internet.email()}
            </p>
          </nav>
          <nav>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-white text-gray-400">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white text-gray-400">{capitalizeFirstLetters(faker.company.catchPhraseNoun())}</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white text-gray-400">{capitalizeFirstLetters(faker.company.catchPhraseNoun())}</a></li>
            </ul>
          </nav>
          <nav>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-white text-gray-400">{capitalizeFirstLetters(faker.company.catchPhraseNoun())}</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white text-gray-400">{capitalizeFirstLetters(faker.company.catchPhraseNoun())}</a></li>
            </ul>
          </nav>
          <div>
            <h3 className="text-lg font-semibold mb-4">{capitalizeFirstLetters(faker.company.buzzNoun())}</h3>
            <p className="text-sm text-gray-400 mb-4">The content in the footer is mostly auto-generated!</p>
            <p className="text-sm text-gray-400 mb-4">Made with ❤️ by <a href="mailto: adriana45silva@gmail.com" className="hover:text-white text-white">adriana45silva</a></p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer