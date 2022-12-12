import { Location } from "types"
import LocationCard from "@/components/LocationCard"
import React from "react"
import { ScrollRight as ScrollIcon } from "./Icons"

function Locations({ locations }: { locations: Location[] }) {
  const scrollable = React.useRef(null)

  function scroll(scrollOffset: number) {
    if (scrollable.current) {
      ;(scrollable.current as HTMLElement).scrollLeft += scrollOffset
    }
  }

  return (
    <section className="flex flex-col space-y-4 px-8 md:px-16 mt-8 relative">
      <p className="text-white text-left">Locations</p>

      <ScrollIcon
        className="absolute h-10 w-10 top-1/2 translate-y-[-25px] md:translate-y-[-15px] left-0 md:left-10 rotate-180 z-10 cursor-pointer"
        onClick={() => scroll(-60)}
      />

      <ScrollIcon
        className="absolute h-10 w-10 top-1/2 translate-y-[-25px] md:translate-y-[-10px] right-0 md:right-8 z-10 cursor-pointer"
        onClick={() => scroll(60)}
      />

      <ul
        className="flex space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide"
        ref={scrollable}
      >
        {locations.map((item) => {
          return <LocationCard item={item} />
        })}
      </ul>
    </section>
  )
}

export default Locations
