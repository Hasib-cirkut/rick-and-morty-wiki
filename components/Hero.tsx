function Hero() {
  return (
    <div className="flex flex-col relative font-tttravels-bold sm:font-tttravels-bold">
      <img
        src="/assets/images/gun.png"
        className="absolute object-contain w-36 right-[-20px] sm:w-72 sm:right-[-120px] top-8 translate-x-[50%]"
      />

      <div className="flex relative sm:space-x-4">
        <img
          src="/assets/images/glow.png"
          className="absolute object-contain top-[-15px] sm:top-[-50px]"
        />
        <img
          src="/assets/images/bubble.png"
          className="absolute object-contain w-24 sm:w-72 left-[-45px] translate-y-[-40%] sm:left-[-110px] z-20"
        />
        <img
          src="/assets/images/pill.png"
          className="hidden sm:block absolute object-contain w-16 right-[-30px]"
        />
        <p className="text-[40px] sm:text-heading  italic text-white z-10">
          THE
        </p>
        <img
          src="/assets/images/portal.png"
          className="h-10 w-16 sm:h-48 sm:w-36 object-contain z-10"
        />
        <p className="text-[40px] sm:text-heading inline-block text-transparent bg-clip-text bg-gradient-to-br from-secondary to-accent">
          RICK &
        </p>
      </div>

      <div className="flex space-x-2 sm:space-x-8">
        <p className="text-[40px] sm:text-heading inline-block text-transparent bg-clip-text bg-gradient-to-br from-secondary to-accent">
          MORTY
        </p>

        <p className="text-[40px] sm:text-heading italic text-white">WIKI</p>
      </div>

      <div className="flex flex-col-reverse tttravels items-start sm:flex-row sm:justify-center sm:items-center sm:space-x-8">
        <img
          src="/assets/images/watch-now-button.png"
          className="object-contain h-10 sm:h-15 mt-4 sm:mt-0"
        />

        <p className=" text-accent text-left max-w-[15rem] sm:max-w-lg text-[8px] sm:text-base">
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
      </div>
    </div>
  )
}

export default Hero
