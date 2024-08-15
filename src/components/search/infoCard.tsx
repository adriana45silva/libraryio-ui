import React from 'react'
import { Star } from 'lucide-react'
import { capitalizeFirstLetters } from '@/utils'

interface Props {
  name: string
  owner: string
  stars: string
}

const InfoCard = ({ name, owner, stars }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
      <div className="p-6">
        {name && <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate" title={name}>
          {capitalizeFirstLetters(name)}
        </h3>}
        {owner && <p className="text-gray-600 mb-4 truncate" title={owner}>
          by {owner}
        </p>}
        <div className="flex items-center text-yellow-500">
          <Star size={20} className="mr-1" />
          <span className="font-medium">{stars.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}

export default InfoCard