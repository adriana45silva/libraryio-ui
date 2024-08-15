import React from 'react'
import InfoCard from './infoCard'
import EmptyCard from './emptyCard'
import { RepositoriesData } from './types'

interface Props {
  repositories: RepositoriesData[]
}

const InfoList = ({ repositories }: Props) => {
  if (!repositories.length) {
    return (<EmptyCard />)
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h3 className="text-lg font-semibold mb-4">Projects found:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {repositories.length !== 0 && repositories.map((project) => (
          <InfoCard
            key={project.id}
            name={project.name}
            owner={project.owner}
            stars={project.stars}
          />
        ))}
      </div>
    </section>
  )
}

export default InfoList