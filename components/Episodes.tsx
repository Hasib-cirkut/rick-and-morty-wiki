import { Episode } from "types"

function Episodes({ episodes }: { episodes: Episode[] }) {
  return (
    <section className="flex flex-col space-y-4 px-4 md:px-16 mt-8">
      <p className="text-white text-left">Episodes</p>

      <ul className="flex space-x-4 md:space-x-8 overflow-x-auto">
        {episodes.map(({ id, episode, name }) => {
          return (
            <li className="min-w-[10rem] md:min-w-[17rem]" key={id}>
              <div className="p-[2px] bg-gradient-to-t rounded-sm from-secondary/10 to-accent/10 clip-pentagon-episode shrink-0">
                <div className="flex flex-col items-start justify-between bg-primary/60 clip-pentagon-episode px-4 py-2 ">
                  <p className="text-white font-tttravels text-[10px] md:text-base">
                    {episode}
                  </p>
                  <p className="text-white text-[14px]">{name}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Episodes
