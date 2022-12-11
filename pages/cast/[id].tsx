import React, { useEffect, useState } from "react"
import useSWR, { SWRConfig } from "swr"

import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { fetchCast, fetchEpisode, resolveEpisodes } from "utils/queries"
import { Character } from "types"

const Cast: NextPage = () => {
  const { query, isReady } = useRouter()

  const [castData, setCastData] = useState({} as Character)
  const [episodes, setEpisodes] = useState([] as string[])

  useEffect(() => {
    async function getData() {
      if (!isReady) return

      const characterData: Character = await fetchEpisode(
        `https://rickandmortyapi.com/api/character/${query.id}`
      )

      const epis = characterData.episode.slice(0, 5)
      const promises = epis.map((e) => fetchEpisode(e))

      const episodeNames = await (
        await Promise.all([...promises])
      ).map((item) => item.name)

      setCastData(() => characterData)
      setEpisodes(() => episodeNames)
    }

    getData()
  }, [query.id])

  return (
    <div className="flex min-h-screen overflow-x-hidden overflow-y-hidden flex-col bg-primary relative">
      <img
        src="/assets/images/background-cast.png"
        className="absolute object-cover h-full w-full top-0 pointer-events-none"
      />

      <Head>
        <title>Cast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-screen flex-col justify-center text-center ">
        <div className="flex flex-col items-center space-y-16">
          <img
            src="/assets/images/logo.png"
            alt="rick and morty logo"
            className="object-contain w-32 h-16"
          />

          <section className="flex justify-around items-center justify-center space-x-32 font-tttravels">
            <div className="flex flex-col space-y-4 mb-16">
              <p className="text-[36px] text-accent font-tttravels-bold">
                {castData?.name}
              </p>

              <div className="box rounded">
                <div className="p-6">
                  <img
                    src={castData?.image}
                    className="w-[250px] h-[250px] rounded"
                  />
                </div>
              </div>
            </div>

            <div className="bg-secondary h-[250px] w-[1px]"></div>

            <div className="flex flex-col text-white space-y-4 font-tttravels-bold">
              <div className="flex justify-between space-x-4">
                <div className="flex flex-col items-start box px-4 py-2 flex-1">
                  <p className="text-sm">Status</p>
                  <p className="text-[36px]">{castData?.status}</p>
                </div>

                <div className="flex flex-col items-start box px-4 py-2 flex-1">
                  <p className="text-sm">Species</p>
                  <p className="text-[36px]">{castData?.species}</p>
                </div>

                <div className="flex flex-col items-start box px-4 py-2 flex-1">
                  <p className="text-sm">Gender</p>
                  <p className="text-[36px]">{castData?.gender}</p>
                </div>
              </div>

              <div className="flex flex-col items-start box px-4 py-2">
                <p className="text-sm">Origin</p>
                <p className="text-[36px]">{castData?.origin?.name}</p>
              </div>

              <div className="flex flex-col items-start box px-4 py-2">
                <p className="text-sm">Last Known Locations</p>
                <p className="text-[36px]">{castData?.location?.name}</p>
              </div>

              <div className="flex flex-col items-start box px-4 py-2 space-y-4">
                <p className="text-sm">Episode(S)</p>

                <ul className="list-disc list-outside text-left px-8">
                  {episodes.map((epi) => {
                    return (
                      <li key={epi} className="text-[36px]">
                        {epi}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default function Page() {
  return (
    <SWRConfig>
      <Cast />
    </SWRConfig>
  )
}
