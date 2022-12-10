import { Character } from "types"

function CharacterCard({ item: { image, name } }: { item: Character }) {
  return (
    <li className="min-w-[8rem] sm:min-w-[17rem]">
      <div className="flex flex-col">
        <div className="p-[1px] bg-gradient-to-tr  rounded from-secondary to-accent clip-pentagon shrink-0">
          <div className="rounded-sm flex flex-col items-start justify-between bg-primary clip-pentagon p-2 sm:p-4 space-y-4 sm:space-y-6 ">
            <img
              src={image}
              className="h-[100px] w-[120px] sm:w-[240px] sm:h-[220px] rounded-sm object-fill"
            />

            <p className="text-white text-[10px] max-w-[80px] sm:max-w-[180px] truncate">
              {name}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CharacterCard
