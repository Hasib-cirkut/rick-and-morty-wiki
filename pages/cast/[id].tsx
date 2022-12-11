import React, { useEffect, useState } from "react"
import { SWRConfig } from "swr"

import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { fetchEpisode } from "utils/queries"
import { Character } from "types"
import CastInfoBox from "@/components/CastInfoBox"
import {
  Android,
  Earth,
  Episodes,
  Gender,
  Heart,
  Location,
} from "@/components/Icons"
import Link from "next/link"

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
        className="hidden md:block absolute object-cover h-full w-full top-0 pointer-events-none"
      />

      <img
        src="/assets/images/background-cast-sm.png"
        className="block md:hidden absolute object-fill  w-full top-0 pointer-events-none"
      />

      <Head>
        <title>Cast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-screen flex-col justify-center items-center text-center mb-6 md:space-y-16">
        <Link href="/">
          <img
            src="/assets/images/logo.png"
            alt="rick and morty logo"
            className="object-contain w-40 h-16"
          />
        </Link>

        <section className="flex flex-col md:flex-row px-8 justify-around items-center justify-center md:space-x-32 font-tttravels">
          <div className="flex flex-col space-y-4 mb-4 md:mb-16">
            <p className="text-[36px] text-accent font-tttravels md:font-tttravels-semibold">
              {castData?.name}
            </p>

            <div className="box rounded">
              <div className="p-8">
                <img
                  src={castData?.image}
                  className="w-[200px] h-[200px] rounded"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block bg-secondary h-[250px] w-[1px]"></div>

          <div className="flex flex-col text-white space-y-4 md:min-w-[800px]">
            <div className="flex justify-between space-x-4">
              <CastInfoBox
                info={{
                  title: "Status",
                  data: {
                    label: castData.status,
                  },
                }}
              >
                <Heart className="h-6 w-6 md:h-8 md:w-8" />
              </CastInfoBox>

              <CastInfoBox
                info={{
                  title: "Species",
                  data: {
                    label: castData.species,
                  },
                }}
              >
                <Android className="h-6 w-6 md:h-8 md:w-8" />
              </CastInfoBox>

              <CastInfoBox
                info={{
                  title: "Gender",
                  data: {
                    label: castData.gender,
                  },
                }}
              >
                <Gender className="h-6 w-6 md:h-8 md:w-8" />
              </CastInfoBox>
            </div>

            <CastInfoBox
              info={{
                title: "Origin",
                data: {
                  label: castData.origin?.name,
                  url: castData.origin?.url,
                },
              }}
            >
              <Earth className="h-6 w-6 md:h-8 md:w-8" />
            </CastInfoBox>

            <CastInfoBox
              info={{
                title: "Last Known Location",
                data: {
                  label: castData.location?.name,
                  url: castData.location?.url,
                },
              }}
            >
              <Location className="h-6 w-6 md:h-8 md:w-8" />
            </CastInfoBox>

            <div className="flex flex-col items-start box px-4 py-2 space-y-4">
              <Episodes className="h-6 w-6 md:h-8 md:w-8" />
              <p className="text-sm font-tttravels">Episode(S)</p>

              <ul className="list-disc list-outside text-left px-8">
                {episodes.map((epi) => {
                  return (
                    <li
                      key={epi}
                      className="text-md md:text-[36px] font-tttravels-semibold"
                    >
                      {epi}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>
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
