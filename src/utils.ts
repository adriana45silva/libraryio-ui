import { env } from "./config/env"


export const capitalizeFirstLetters = (str: string) => {
  const words = str.split(' ')
  const capitalizedWords = words.map(word => {
    if (word.length === 0) return word
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
  return capitalizedWords.join(' ')
}

