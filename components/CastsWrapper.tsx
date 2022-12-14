import { Character } from "types"
import CharacterCard from "@/components/CharacterCard"

function CastsWrapper({ casts }: { casts: Character[] }) {
  return (
    <section className="flex flex-col space-y-8 justify-center px-12">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {casts.map((item) => {
          return <CharacterCard item={item} key={item.id} />
        })}
      </ul>
    </section>
  )
}

export default CastsWrapper
