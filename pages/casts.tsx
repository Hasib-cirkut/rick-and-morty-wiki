import React, { ChangeEvent, useCallback } from "react"
import Head from "next/head"
import CastsWrapper from "@/components/CastsWrapper"
import Pagination from "../components/Pagination"
import { Character, Episode, Info, Location } from "../types"
import { getData } from "utils/queries"
import Link from "next/link"
import Select, { StylesConfig } from "react-select"
import EpisodeWrapper from "@/components/EpisodeWrapper"
import LocationWrapper from "@/components/LocationWrapper"

import debounce from "lodash/debounce"

import backgroundCasts from "public/assets/images/background-casts.png"
import Image from "next/image"

type TSelectOption = { value: string; label: string }

const options: TSelectOption[] = [
  { value: "character", label: "Character" },
  { value: "episode", label: "Episode" },
  { value: "location", label: "Location" },
]

export default function Cast() {
  const [page, setPage] = React.useState(1)
  const [category, setCategory] = React.useState("character")
  const [title, setTitle] = React.useState("The Cast")
  const [totalPage, setTotalPage] = React.useState(1)
  const [characters, setCharacters] = React.useState([] as Character[])
  const [locations, setLocations] = React.useState([] as Location[])
  const [episodes, setEpisodes] = React.useState([] as Episode[])
  const [query, setQuery] = React.useState("")

  const debounceFn = useCallback(debounce(handleQueryApiCall, 400), [])

  function setCharacterInfo(response: Info<Character[]>) {
    setCharacters(() => (response.results as Character[]) ?? [])
    setTotalPage(() => response.info?.pages ?? 1)
    setTitle(() => "The Cast")
  }

  function setEpisodeInfo(response: Info<Episode[]>) {
    setEpisodes(() => (response.results as Episode[]) ?? [])
    setTotalPage(() => response.info?.pages ?? 1)
    setTitle(() => "The Episodes")
  }

  function setLocationInfo(response: Info<Location[]>) {
    setLocations(() => (response.results as Location[]) ?? [])
    setTotalPage(() => response.info?.pages ?? 1)
    setTitle(() => "The Locations")
  }

  React.useEffect(() => {
    setQuery(() => "")
    async function resolveData() {
      const response = await getData(category, query, page)

      if (category === "character") {
        setCharacterInfo(response as Info<Character[]>)
      } else if (category === "episode") {
        setEpisodeInfo(response as Info<Episode[]>)
      } else {
        setLocationInfo(response as Info<Location[]>)
      }
    }

    resolveData()
  }, [category, page])

  function handleSelect(e: any) {
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

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(() => e.target.value)
    debounceFn(e.target.value)
  }

  async function handleQueryApiCall(query: string) {
    const response = await getData(category, query, page)

    if (category === "character") {
      setCharacterInfo(response as Info<Character[]>)
    } else if (category === "episode") {
      setEpisodeInfo(response as Info<Episode[]>)
    } else {
      setLocationInfo(response as Info<Location[]>)
    }
  }

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#14D9E5",
      color: "white",
      borderTopLeftRadius: 100,
      borderBottomLeftRadius: 100,
      ":active": {
        outline: "none",
      },
      border: "none",
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "#14D9E5",
        color: "white",
        borderBottom: "0px solid white",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "black",
        },
      }
    },
    dropdownIndicator: (styles) => {
      return {
        ...styles,
        color: "white",
      }
    },
    input: (styles) => {
      return {
        ...styles,
        color: "white",
      }
    },
    singleValue: (provided) => ({
      ...provided,
      color: "white",
      fontWeight: "bold",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden overflow-y-hidden flex-col font-tttravels bg-primary relative">
      <Image
        src={backgroundCasts}
        alt="Background image"
        className="absolute object-cover h-full w-full top-0 pointer-events-none"
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

          <div className="flex flex-col sm:flex-row px-16 justify-between w-full sm:px-36 mb-8">
            <h2 className="text-lg sm:text-[32px] text-accent font-tttravels-semibold">
              {title}
            </h2>

            <div className="flex justify-center items-center">
              <Select
                options={options}
                onChange={handleSelect}
                defaultValue={options[0]}
                styles={colourStyles}
                isSearchable={false}
              />
              <input
                type="text"
                className="flex py-[6px] w-32 px-2 bg-primary border border-accent text-white outline-0"
                value={query}
                onChange={handleQuery}
              />
            </div>
          </div>

          {category === "character" && <CastsWrapper casts={characters} />}
          {category === "episode" && <EpisodeWrapper episodes={episodes} />}
          {category === "location" && <LocationWrapper locations={locations} />}

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
