import { Location } from "types"
import LocationCard from "@/components/LocationCard"

function LocationWrapper({ locations }: { locations: Location[] }) {
  return (
    <section className="flex justify-center px-4 sm:px-12">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-8">
        {locations.map((item) => {
          return <LocationCard item={item} key={item.id} />
        })}
      </ul>
    </section>
  )
}

export default LocationWrapper
