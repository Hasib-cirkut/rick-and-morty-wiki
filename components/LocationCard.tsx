import { Location } from "types"

function LocationCard({ item: { id, name } }: { item: Location }) {
  return (
    <li className="min-w-[10rem] md:min-w-[17rem]">
      <div className="p-[2px] bg-gradient-to-t rounded-sm from-secondary/10 to-accent/10 clip-pentagon-episode shrink-0">
        <div className="flex flex-col items-start justify-between bg-primary/60 clip-pentagon-episode px-4 py-2 ">
          <p className="text-white font-tttravels text-[10px] md:text-base">
            # {id}
          </p>
          <p className="text-white text-[14px] text-left">{name}</p>
        </div>
      </div>
    </li>
  )
}

export default LocationCard
