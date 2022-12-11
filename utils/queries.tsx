export const fetchCast = async (id: string) => {
  const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

  return await result.json()
}

export const fetchCasts = async () => {
  const result = await fetch(
    "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8"
  )

  return await result.json()
}

export const fetchEpisodes = async () => {
  let result = await fetch(
    "https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7"
  )

  return await result.json()
}

export const fetchEpisode = async (url: string) => {
  let result = await fetch(url)

  return await result.json()
}

export const fetchLocations = async () => {
  let result = await fetch(
    "https://rickandmortyapi.com/api/location/1,2,3,4,5,6,7,8"
  )
  return await result.json()
}

export const fetchAllCharacters = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  )

  return await response.json()
}

export const fetchAllEpisodes = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/?page=${page}`
  )

  return await response.json()
}

export const fetchAllLocations = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location/?page=${page}`
  )

  return await response.json()
}

export async function resolveEpisodes(epis: string[]) {
  const episodeUrls = epis.slice(0, 5) ?? []

  const promises = episodeUrls.map((epi) => {
    return fetchEpisode(epi)
  })

  const response = await Promise.all([...promises])

  return response
}
