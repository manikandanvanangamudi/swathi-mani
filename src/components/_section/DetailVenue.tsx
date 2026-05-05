import RevealText from "@/components/ui/RevealText";
import CalendarCard from "@/components/ui/CalendarCard";
import { CountdownTimer } from "@/components/ui/CountDown";
import { Luxurious_Script, Playfair_Display } from "next/font/google";

const secondFont = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const DetailVenue = () => {
  return (
    <div className="flex flex-col gap-0 w-full bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white py-20 px-4">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-16">
        
        {/* Main Title */}
        <div className="text-center mb-8">
          <h2 className={`text-6xl md:text-7xl font-bold mb-4 ${secondFont.className}`}>
            <RevealText
              text="The Celebration"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-300" />
            <div className="w-2 h-2 rounded-full bg-amber-300" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-300" />
          </div>
        </div>

        {/* Events Section */}
        <div className="flex flex-col gap-12">
          
          {/* Muhurtham Card */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8 md:p-12 hover:border-amber-400/40 transition-all duration-300">
            <h3 className={`text-4xl md:text-5xl font-semibold mb-8 text-center text-amber-300 ${playfair.className}`}>
              <RevealText
                text="Muhurtham"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </h3>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
                  <RevealText
                    text="Date"
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </p>
                <p className="text-lg md:text-3xl font-semibold text-white">
                  <RevealText
                    text="Wednesday, 17 June 2026"
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
                  <RevealText
                    text="Time"
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </p>
                <p className="text-lg md:text-3xl font-semibold text-white">
                  <RevealText
                    text="6:00 am - 7:30 am"
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Reception Card */}
          <div className="bg-gradient-to-br from-amber-900/20 to-slate-900/40 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8 md:p-12 hover:border-amber-400/40 transition-all duration-300">
            <h3 className={`text-4xl md:text-5xl font-semibold mb-8 text-center text-amber-300 ${playfair.className}`}>
              <RevealText
                text="Reception"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </h3>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
                  <RevealText
                    text="Date"
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </p>
                <p className="text-lg md:text-3xl font-semibold text-white">
                  <RevealText
                    text="Tuesday, 16 June 2026"
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest text-right">
                  <RevealText
                    text="Time"
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </p>
                <p className="text-lg md:text-3xl font-semibold text-white text-right">
                  <RevealText
                    text="6:30 pm onwards"
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-sm text-gray-400 uppercase tracking-widest">
            <RevealText
              text="Time Until Our Big Day"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </p>
          <CountdownTimer targetDate={"2026-06-17T06:00:00"} />
        </div>

        {/* Location Section */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8 md:p-12 flex flex-col gap-6">
          <h3 className={`text-4xl md:text-5xl font-semibold text-center text-amber-300 ${playfair.className}`}>
            <RevealText
              text="Venue"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h3>

          <p className="text-sm md:text-base text-gray-300 text-center leading-relaxed">
            <RevealText
              text="T.T.D. Kalyana Mantapa"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </p>

          <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-amber-400/10">
            <iframe
              src="https://maps.app.goo.gl/StsJAttzVu6n9aUQ8"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>

          <a 
            href="https://maps.app.goo.gl/L4tebJBs7Hg1SZ8H9"
            className="inline-block mx-auto"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-gray-950 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              <RevealText
                text="View on Google Maps"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailVenue;
