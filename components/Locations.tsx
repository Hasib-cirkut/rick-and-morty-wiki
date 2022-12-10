import { Location } from "types"

function Locations({ locations }: { locations: Location[] }) {
  return (
    <section className="flex flex-col space-y-4 px-4 sm:px-16 mt-8">
      <p className="text-white text-left">Locations</p>

      <ul className="flex space-x-4 sm:space-x-8 overflow-x-auto">
        {locations.map((item) => {
          return (
            <li className="min-w-[10rem] sm:min-w-[17rem]" key={item.id}>
              <div className="p-[2px] bg-gradient-to-t rounded-sm from-secondary/10 to-accent/10 clip-pentagon-episode shrink-0">
                <div className="flex flex-col items-start justify-between bg-primary/60 clip-pentagon-episode px-4 py-2 ">
                  <p className="text-white font-tttravels text-[10px] sm:text-base">
                    # {item.id}
                  </p>
                  <p className="text-white text-[14px]">{item.name}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Locations
