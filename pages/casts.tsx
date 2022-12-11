import React from "react"
import useSWR, { SWRConfig } from "swr"

import type { NextPage } from "next"
import Head from "next/head"
import CastsWrapper from "@/components/CastsWrapper"
import Pagination from "../components/Pagination"
import { Character, Info } from "../types"
import { fetchAllCharacters } from "utils/queries"
import Link from "next/link"

export async function getStaticProps() {
  const cast: Promise<Info<Character[]>> = await fetchAllCharacters(1)

  return {
    props: {
      fallback: {
        "/fetchAllCharacters": cast,
      },
    },
  }
}

const Cast: NextPage = () => {
  const [page, setPage] = React.useState(1)

  const { data, mutate } = useSWR<Info<Character[]>>(
    ["/fetchAllCharacters", page],
    ([_, page]) => fetchAllCharacters(page)
  )

  React.useEffect(() => {
    async function revalidate() {
      await fetchAllCharacters(page)

      mutate({ ...data })
    }

    revalidate()
  }, [page])

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

          <CastsWrapper casts={data?.results!} />

          <div className="flex justify-center my-8">
            <Pagination page={page} setPage={handleSetPage} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default function Page({ fallback }: { fallback: Character[] }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Cast />
    </SWRConfig>
  )
}
