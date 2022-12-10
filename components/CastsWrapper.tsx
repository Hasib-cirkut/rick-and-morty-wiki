import { Character } from "../../types"
import CharacterCard from "../CharacterCard"

function CastsWrapper(props: { casts: Character[] }) {
  return (
    <section className="flex flex-col space-y-8 justify-center px-12">
      <div className="flex justify-between">
        <h2 className="text-[32px] text-accent font-tttravels-semibold">
          The Cast
        </h2>
        <button>Search</button>
      </div>

      <ul className="flex flex-wrap gap-8">
        {props.casts.map((item) => {
          return <CharacterCard item={item} key={item.id} />
        })}
      </ul>
    </section>
  )
}

export default CastsWrapper
