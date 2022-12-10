import { Character } from "types"
import CharacterCard from "@/components/CharacterCard"

function CastsWrapper({ casts }: { casts: Character[] }) {
  return (
    <section className="flex flex-col space-y-8 justify-center px-12">
      <div className="flex justify-between">
        <h2 className="text-[32px] text-accent font-tttravels-semibold">
          The Cast
        </h2>
        <button>Search</button>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {casts?.map((item) => {
          return <CharacterCard item={item} key={item.id} />
        })}
      </ul>
    </section>
  )
}

export default CastsWrapper
