import { faker } from '@faker-js/faker'
import React from 'react'


const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-80  min-h-full bg-white shadow-lg">
      <div className="h-full overflow-y-auto p-4 flex-row align-center">
        <div className='pb-3'>
          <h3 className="text-lg font-semibold mb-4">What's new</h3>
          <p>{faker.lorem.paragraph({ min: 1, max: 3 })}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">How to check it out</h3>
          <p>{faker.lorem.paragraph({ min: 1, max: 2 })}</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar