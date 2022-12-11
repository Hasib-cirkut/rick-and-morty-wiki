import React from "react"
import useSWR, { SWRConfig } from "swr"

import type { NextPage } from "next"
import Head from "next/head"
import CastsWrapper from "@/components/CastsWrapper"
import Pagination from "../components/Pagination"
import { Character, Episode, Info, Location } from "../types"
import {
  fetchAllCharacters,
  fetchAllEpisodes,
  fetchAllLocations,
} from "utils/queries"
import Link from "next/link"
import Select from "react-select"

type TSelectOption = { value: string; label: string }

const options: TSelectOption[] = [
  { value: "character", label: "Character" },
  { value: "episode", label: "Episode" },
  { value: "location", label: "Location" },
]

export default function Cast() {
  const [page, setPage] = React.useState(1)
  const [category, setCategory] = React.useState("character")
  const [totalPage, setTotalPage] = React.useState(1)
  const [characters, setCharacters] = React.useState([] as Character[])
  const [locations, setLocations] = React.useState([] as Location[])
  const [episodes, setEpisodes] = React.useState([] as Episode[])

  React.useEffect(() => {
    async function getData() {
      let response = {} as Info<Character[] | Episode[] | Location[]>

      if (category === "character") {
        response = await fetchAllCharacters(page)

        setCharacters(() => response.results as Character[])
        setTotalPage(() => response.info?.pages ?? 1)
      } else if (category === "episode") {
        response = await fetchAllEpisodes(page)

        setEpisodes(() => response.results as Episode[])
        setTotalPage(() => response.info?.pages ?? 1)
      } else {
        response = await fetchAllLocations(page)

        setLocations(() => response.results as Location[])
        setTotalPage(() => response.info?.pages ?? 1)
      }
    }

    getData()
  }, [category, page])

  function handleSelect(e: TSelectOption) {
    setCategory(() => e.value)
  }

  const handleSetPage = (type: "INC" | "DEC") => {
    if (type === "DEC" && page === 1) {
      return
    }

    if (type === "INC") {
      setPage((_) => page + 1)
      return
    }

    setPage((_) => page - 1)
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden overflow-y-hidden flex-col font-tttravels bg-primary relative">
      <img
        src="/assets/images/background-casts.png"
        className="absolute object-cover h-full top-0 pointer-events-none"
      />

      <Head>
        <title>Casts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-screen flex-col justify-center text-center">
        <div className="flex flex-col items-center">
          <Link href="/">
            <img
              src="/assets/images/logo.png"
              alt="rick and morty logo"
              className="object-contain w-40 h-16"
            />
          </Link>

          <div className="flex">
            <Select
              options={options}
              onChange={handleSelect}
              defaultValue={options[0]}
            />
            <input type="text" />
          </div>

          {category === "character" && <CastsWrapper casts={characters} />}

          <div className="flex justify-center my-8">
            <Pagination
              page={page}
              setPage={handleSetPage}
              totalPage={totalPage}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
