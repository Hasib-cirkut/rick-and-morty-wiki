function Hero() {
  return (
    <div className="flex flex-col relative font-tttravels-bold md:font-tttravels-bold">
      <img
        src="/assets/images/gun.png"
        className="absolute object-contain w-36 right-[-20px] md:w-72 md:right-[-120px] top-8 translate-x-[50%]"
      />

      <div className="flex relative md:space-x-4">
        <img
          src="/assets/images/glow.png"
          className="absolute object-contain top-[-15px] md:top-[-50px]"
        />
        <img
          src="/assets/images/bubble.png"
          className="absolute object-contain w-24 md:w-72 left-[-45px] translate-y-[-40%] md:left-[-110px] z-20"
        />
        <img
          src="/assets/images/pill.png"
          className="hidden md:block absolute object-contain w-16 right-[-30px]"
        />
        <p className="text-[40px] md:text-heading  italic text-white z-10">
          THE
        </p>
        <img
          src="/assets/images/portal.png"
          className="h-10 w-16 md:h-48 md:w-36 object-contain z-10"
        />
        <p className="text-[40px] md:text-heading inline-block text-transparent bg-clip-text bg-gradient-to-br from-secondary to-accent">
          RICK &
        </p>
      </div>

      <div className="flex space-x-2 md:space-x-8">
        <p className="text-[40px] md:text-heading inline-block text-transparent bg-clip-text bg-gradient-to-br from-secondary to-accent">
          MORTY
        </p>

        <p className="text-[40px] md:text-heading italic text-white">WIKI</p>
      </div>

      <div className="flex flex-col-reverse tttravels items-start md:flex-row md:justify-center md:items-center md:space-x-8">
        <img
          src="/assets/images/watch-now-button.png"
          className="object-contain h-10 md:h-15 mt-4 md:mt-0"
        />

        <p className=" text-accent text-left max-w-[15rem] md:max-w-lg text-[8px] md:text-base">
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
      </div>
    </div>
  )
}

export default Hero
