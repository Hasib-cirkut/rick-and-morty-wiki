import Link from "next/link"
import { Character } from "types"
import Image from "next/image"

function CharacterCard({ item: { image, name, id } }: { item: Character }) {
  return (
    <Link href={`/cast/${id}`}>
      <li className="min-w-[8rem] md:min-w-[17rem]">
        <div className="flex flex-col">
          <div className="p-[1px] bg-gradient-to-tr  rounded from-secondary to-accent clip-pentagon shrink-0">
            <div className="rounded-sm flex flex-col items-start justify-between bg-primary clip-pentagon p-2 md:p-4 space-y-4 md:space-y-6 ">
              <Image
                src={image}
                height={100}
                width={120}
                className="h-[100px] w-[120px] md:w-[240px] md:h-[220px] rounded-sm object-fill"
                alt="Character card"
              />

              <p className="text-white text-[10px] max-w-[80px] md:max-w-[180px] truncate">
                {name}
              </p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default CharacterCard
