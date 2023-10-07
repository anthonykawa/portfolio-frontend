const FrBackground = () => {
  return (
    <>
      <div className="absolute top-0 -z-10 flex justify-center w-full">
        <div className="absolute -z-0 w-full h-full bg-white/40 dark:bg-black/10 backdrop-blur-sm"></div>
        <div className="md:shrink-0">
          <picture>
            <source src="images/fp-background.png" />
            <img className="md:object-cover md:h-auto sm:object-none sm:object-center sm:h-screen sm:w-auto" src="images/fp-background.png" />
          </picture>
        </div>
      </div>
    </>
  );
}

export default FrBackground;
