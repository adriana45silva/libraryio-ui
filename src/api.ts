import { env } from "./config/env"

export const searchLibrariesIO = async (query: string) => {
  const baseUrl = `https://libraries.io/api/NPM/${query}`
  const url = new URL(baseUrl)

  if (!env.LIBRARIESIO_API_KEY) {
    throw new Error(`Assertion: LIBRARIESIO_API_KEY value is not defined, please check the README for details`)
  }
  
  
  url.searchParams.append('api_key', env.LIBRARIESIO_API_KEY)

  try {
    const response = await fetch(url.toString())
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return [data]
  } catch (error) {
    throw new Error(`Assertion: There was a problem with the fetch operation:', ${error}`)
  }
}