import Link from "next/link"
import CharacterCard from "@/components/CharacterCard"
import { Character } from "types"

function MeetTheCast({ cast }: { cast: Character[] }) {
  return (
    <section className="flex flex-col space-y-4 px-4 md:px-16 mt-8">
      <div className="flex justify-between">
        <p className="text-white text-lg">Meet the Cast</p>

        <Link href="/casts" legacyBehavior>
          <a className="text-white px-4 py-2 border border-secondary rounded">
            View All
          </a>
        </Link>
      </div>

      <ul className="flex space-x-4 md:space-x-8 overflow-x-auto">
        {cast?.map((item) => {
          return <CharacterCard item={item} key={item.id} />
        })}
      </ul>
    </section>
  )
}

export default MeetTheCast
