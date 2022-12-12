import { Episode } from "types"
import CharacterCard from "@/components/CharacterCard"
import EpisodeCard from "./EpisodeCard"

function CastsWrapper({ episodes }: { episodes: Episode[] }) {
  return (
    <section className="flex justify-center px-4 sm:px-12">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-8">
        {episodes.map((item) => {
          return <EpisodeCard item={item} />
        })}
      </ul>
    </section>
  )
}

export default CastsWrapper
