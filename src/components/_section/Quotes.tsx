import RevealText from "../ui/RevealText";
import { Luxurious_Script } from "next/font/google";

const secondFont = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
});

const Quotes = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-20 px-4">
      <div className="flex flex-col items-center justify-center gap-8 w-full lg:w-[70%]">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className={`text-5xl md:text-6xl text-white mb-4 ${secondFont.className}`}>
            <RevealText
              text="Our Vows"
              duration={0.3}
              stagger={0.15}
              trigger="viewport"
            />
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-white" />
          </div>
        </div>

        {/* Quote Cards */}
        <div className="flex flex-col gap-8 w-full">
          {/* Quote 1 */}
          <div className="bg-gradient-to-r from-gray-950 to-gray-900 backdrop-blur-sm border border-gray-800 w-full px-8 md:px-12 py-10 rounded-xl flex flex-col gap-4 hover:border-gray-700 transition-all duration-300">
            <p className="text-base md:text-xl lg:text-2xl text-white text-center font-light leading-relaxed">
              <RevealText
                text="Two souls walking as one."
                duration={0.3}
                stagger={0.15}
                trigger="viewport"
              />
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-4 bg-gray-600" />
              <div className="w-1 h-1 rounded-full bg-gray-600" />
              <div className="h-px w-4 bg-gray-600" />
            </div>
          </div>

          {/* Quote 2 */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-950 backdrop-blur-sm border border-gray-800 w-full px-8 md:px-12 py-10 rounded-xl flex flex-col gap-4 hover:border-gray-700 transition-all duration-300">
            <p className="text-base md:text-xl lg:text-2xl text-white text-center font-light leading-relaxed">
              <RevealText
                text="May our journey be filled with harmony, love, and shared purpose — as we walk together in the seven sacred steps."
                duration={0.3}
                stagger={0.15}
                trigger="viewport"
              />
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-4 bg-gray-600" />
              <div className="w-1 h-1 rounded-full bg-gray-600" />
              <div className="h-px w-4 bg-gray-600" />
            </div>
          </div>

          {/* Quote 3 - Tagline */}
          <div className="text-center mt-8">
            <p className={`text-3xl md:text-4xl text-white italic font-light mb-4 ${secondFont.className}`}>
              <RevealText
                text="From Sand to Snow, forever we GO"
                duration={0.3}
                stagger={0.15}
                trigger="viewport"
              />
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-6 bg-white opacity-50" />
              <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50" />
              <div className="h-px w-6 bg-white opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
