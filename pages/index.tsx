import Head from "next/head"
import useSWR, { SWRConfig } from "swr"

import Episodes from "@/components/Episodes"
import Hero from "@/components/Hero"
import MeetTheCast from "@/components/MeetTheCast"
import Locations from "@/components/Locations"

import { Character, Episode, Location } from "types"
import { fetchCasts, fetchEpisodes, fetchLocations } from "utils/queries"

export async function getStaticProps() {
  const cast: Promise<Character[]> = await fetchCasts()
  const episodes: Promise<Episode[]> = await fetchEpisodes()
  const locations: Promise<Location[]> = await fetchLocations()

  return {
    props: {
      fallback: {
        "/fetchCasts": cast,
        "/fetchEpisodes": episodes,
        "/fetchLocations": locations,
      },
    },
  }
}

function Home() {
  const { data: castList } = useSWR<Character[]>("/fetchCasts", fetchCasts)
  const { data: episodeList } = useSWR<Episode[]>(
    "/fetchEpisodes",
    fetchEpisodes
  )
  const { data: locationList } = useSWR<Location[]>(
    "/fetchLocations",
    fetchLocations
  )

  return (
    <div className="flex min-h-screen overflow-x-hidden flex-col font-tttravels bg-primary relative">
      <img
        src="/assets/images/background.png"
        className="absolute object-cover h-full top-0 pointer-events-none"
      />

      <Head>
        <title>Rick and Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-screen flex-col justify-center text-center my-8">
        <div className="flex flex-col items-center">
          <img
            src="/assets/images/logo.png"
            alt="rick and morty logo"
            className="object-contain w-32 h-16"
          />

          <Hero />
        </div>

        <MeetTheCast cast={castList!} />
        <Episodes episodes={episodeList!} />
        <Locations locations={locationList!} />
      </main>
    </div>
  )
}

export default function Page({ fallback }: { fallback: Character[] }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  )
}
