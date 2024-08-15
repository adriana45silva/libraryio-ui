import React from 'react'


const EmptyCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-xl mx-auto w-full">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No projects found 😭</h3>
        <p>Try a different query</p>
      </div>
    </div>
  )
}

export default EmptyCard