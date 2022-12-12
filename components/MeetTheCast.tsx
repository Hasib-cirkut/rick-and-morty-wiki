import Link from "next/link"
import CharacterCard from "@/components/CharacterCard"
import { Character } from "types"
import React from "react"
import { ScrollRight as ScrollIcon } from "./Icons"

function MeetTheCast({ cast }: { cast: Character[] }) {
  const scrollable = React.useRef(null)

  function scroll(scrollOffset: number) {
    if (scrollable.current) {
      ;(scrollable.current as HTMLElement).scrollLeft += scrollOffset
    }
  }

  return (
    <section className="flex flex-col space-y-4 px-8 md:px-16 mt-8 relative">
      <div className="flex justify-between">
        <p className="text-white text-lg">Meet the Cast</p>

        <Link href="/casts" legacyBehavior>
          <a className="text-white px-4 py-2 border border-secondary rounded">
            View All
          </a>
        </Link>
      </div>

      <ScrollIcon
        className="absolute h-10 w-10 top-1/2 translate-y-[-15px] left-0 md:left-10 rotate-180 z-10 cursor-pointer"
        onClick={() => scroll(-60)}
      />

      <ScrollIcon
        className="absolute h-10 w-10 top-1/2 translate-y-[-15px] right-0 md:right-8 z-10 cursor-pointer"
        onClick={() => scroll(60)}
      />

      <ul
        className="flex space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide"
        ref={scrollable}
      >
        {cast?.map((item) => {
          return <CharacterCard item={item} key={item.id} />
        })}
      </ul>
    </section>
  )
}

export default MeetTheCast
