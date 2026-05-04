import RevealText from "../ui/RevealText";

const Quotes = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 h-[20vh] text-white">
        <div className="bg-gray-950 w-[90%] md:w-[60%] lg:w-[40%] px-8 md:px-4 py-8 rounded-2xl flex flex-col gap-4">
          <p className="text-sm font-bold md:text-md lg:text-lg text-center">
            <RevealText
              text="Two souls walking as one."
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
          <p className="text-sm font-bold md:text-md lg:text-lg text-center">
            <RevealText
              text="May our journey be filled with harmony, love, and shared purpose — as we walk together in the seven sacred steps."
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
          <p className="text-xs md:text-sm lg:text-md text-center italic">
            <RevealText
              text="From Sand to Snow, forever we GO"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
