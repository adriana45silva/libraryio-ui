'use client'
import React, { useState, useCallback, useEffect } from "react"
import { useRouter, useSearchParams } from 'next/navigation'

import InfoList from "@/components/search/infoList"
import { Search as SearchIcon } from 'lucide-react'
import { RepositoriesData } from "./types"
import { searchLibrariesIO } from "@/api"


export default function SearchWrapper() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [repositories, setRepositories] = useState<RepositoriesData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const performSearch = useCallback(async (term: string) => {
    if (!term.trim()) {
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const data = await searchLibrariesIO(term)

      const mappedData =  data.map((repo: RepositoriesData) => ({
        id: `id_${repo.forks}`,
        name: repo.name,
        owner: repo.owner,
        stars: repo.stars
      }))
      setRepositories(mappedData)
      
      if (mappedData.length && !error) {
        setIsLoading(false)
      }
    } catch (error) {

      setError(error instanceof Error ? error.message : 'An unknown error occurred 🤪')
      setRepositories([])
      setIsLoading(false)
    }
  }, [])

  const handleSearch = useCallback((event: React.FormEvent) => {
    event.preventDefault()
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
  }, [searchTerm, router])

  useEffect(() => {
    const query = searchParams.get('q')

    if (query) {
      setSearchTerm(query)
      performSearch(query)
    }
  }, [searchParams, performSearch])

  return (
    <section className="flex flex-col items-center justify-between p-4 w-full">
      <form onSubmit={handleSearch} className="w-full max-w-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Start by searching: </h3>
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search here!"
            className="w-full px-4 py-1 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
          >
            <SearchIcon size={20} />
          </button>
        </div>
      </form>

      {isLoading && <h3 className="text-center mt-8 text-lg font-semibold">Loading... 🔍</h3>}

      {error && <h3 className="text-center mt-8 text-red-500 text-lg font-semibold">Error: {error} 🚨</h3>}

      {!isLoading && !error && repositories.length > 0 && <InfoList repositories={repositories} />}
    </section>
  )
}