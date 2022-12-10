export const fetchCast = async () => {
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

export const fetchLocations = async () => {
  let result = await fetch(
    "https://rickandmortyapi.com/api/location/1,2,3,4,5,6,7,8"
  )
  return await result.json()
}
