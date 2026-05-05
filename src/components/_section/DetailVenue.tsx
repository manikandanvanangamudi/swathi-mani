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
    <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl opacity-20" />

      {/* Content */}
      <div className="relative z-10 py-24 px-4">
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-20">
          
          {/* Main Title Section */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h1 className={`text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 drop-shadow-lg ${secondFont.className}`}>
              <RevealText
                text="Celebrations"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </h1>

            <p className={`text-xl md:text-2xl text-amber-200 italic ${playfair.className}`}>
              <RevealText
                text="Join us for two unforgettable nights"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </p>

            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Muhurtham Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-amber-400/30 rounded-3xl p-10 md:p-14 shadow-2xl hover:border-amber-400/60 hover:shadow-amber-900/50 transition-all duration-500 transform hover:scale-105">
                
                <div className="text-center space-y-8">
                  <div>
                    <p className="text-amber-400/60 text-sm uppercase tracking-[0.2em] font-semibold mb-3">
                      <RevealText
                        text="Sacred Ceremony"
                        trigger="viewport"
                        mode="sentence"
                        duration={0.8}
                      />
                    </p>
                    <h2 className={`text-5xl md:text-6xl font-bold text-amber-300 ${playfair.className}`}>
                      <RevealText
                        text="Muhurtham"
                        trigger="viewport"
                        mode="sentence"
                        duration={0.8}
                      />
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-amber-400/70 text-sm uppercase tracking-widest font-semibold">
                        <RevealText
                          text="Date"
                          trigger="viewport"
                          mode="sentence"
                          duration={0.8}
                        />
                      </p>
                      <p className="text-2xl md:text-3xl font-semibold text-white">
                        <RevealText
                          text="Wednesday, 17 June 2026"
                          trigger="viewport"
                          mode="sentence"
                          duration={0.8}
                        />
                      </p>
                    </div>

                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />

                    <div className="space-y-2">
                      <p className="text-amber-400/70 text-sm uppercase tracking-widest font-semibold">
                        <RevealText
                          text="Time"
                          trigger="viewport"
                          mode="sentence"
                          duration={0.8}
                        />
                      </p>
                      <p className="text-2xl md:text-3xl font-semibold text-white">
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
              </div>
            </div>

            {/* Reception Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-amber-400/30 rounded-3xl p-10 md:p-14 shadow-2xl hover:border-amber-400/60 hover:shadow-amber-900/50 transition-all duration-500 transform hover:scale-105">
                
                <div className="text-center space-y-8">
                  <div>
                    <p className="text-amber-400/60 text-sm uppercase tracking-[0.2em] font-semibold mb-3">
                      <RevealText
                        text="Evening Festivity"
                        trigger="viewport"
                        mode="sentence"
                        duration={0.8}
                      />
                    </p>
                    <h2 className={`text-5xl md:text-6xl font-bold text-amber-300 ${playfair.className}`}>
                      <RevealText
                        text="Reception"
                        trigger="viewport"
                        mode="sentence"
                        duration={0.8}
                      />
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-amber-400/70 text-sm uppercase tracking-widest font-semibold">
                        <RevealText
                          text="Date"
                          trigger="viewport"
                          mode="sentence"
                          duration={0.8}
                        />
                      </p>
                      <p className="text-2xl md:text-3xl font-semibold text-white">
                        <RevealText
                          text="Tuesday, 16 June 2026"
                          trigger="viewport"
                          mode="sentence"
                          duration={0.8}
                        />
                      </p>
                    </div>

                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />

                    <div className="space-y-2">
                      <p className="text-amber-400/70 text-sm uppercase tracking-widest font-semibold">
                        <RevealText
                          text="Time"
                          trigger="viewport"
                          mode="sentence"
                          duration={0.8}
                        />
                      </p>
                      <p className="text-2xl md:text-3xl font-semibold text-white">
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
            </div>
          </div>

          {/* Countdown Section */}
          <div className="flex flex-col items-center gap-8 py-12">
            <div className="text-center space-y-4">
              <p className="text-amber-400/70 text-sm uppercase tracking-widest font-semibold">
                <RevealText
                  text="Moments Until Magic"
                  trigger="viewport"
                  mode="sentence"
                  duration={0.8}
                />
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-amber-400/20 rounded-2xl p-6">
              <CountdownTimer targetDate={"2026-06-17T06:00:00"} />
            </div>
          </div>

          {/* Venue Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 to-amber-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-amber-400/30 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden hover:border-amber-400/60 hover:shadow-amber-900/50 transition-all duration-500">
              
              <div className="flex flex-col gap-8">
                <div className="text-center space-y-4">
                  <p className="text-amber-400/60 text-sm uppercase tracking-[0.2em] font-semibold">
                    <RevealText
                      text="Our Sacred Space"
                      trigger="viewport"
                      mode="sentence"
                      duration={0.8}
                    />
                  </p>
                  <h2 className={`text-5xl md:text-6xl font-bold text-amber-300 ${playfair.className}`}>
                    <RevealText
                      text="The Venue"
                      trigger="viewport"
                      mode="sentence"
                      duration={0.8}
                    />
                  </h2>
                </div>

                <p className="text-center text-amber-50/80 text-base md:text-lg leading-relaxed">
                  <RevealText
                    text="T.T.D. Kalyana Mantapa"
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </p>

                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />

                <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-amber-400/20 group/map hover:border-amber-400/40 transition-all duration-300">
                  <iframe
                    src="https://maps.app.goo.gl/StsJAttzVu6n9aUQ8"
                    className="w-full h-full border-0 group-hover/map:opacity-95 transition-opacity duration-300"
                    allowFullScreen
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <a 
                    href="https://maps.app.goo.gl/L4tebJBs7Hg1SZ8H9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-8 md:px-12 py-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 text-gray-950 font-bold text-lg rounded-full shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-110 uppercase tracking-widest">
                      <RevealText
                        text="View on Maps"
                        trigger="viewport"
                        mode="sentence"
                        duration={0.8}
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailVenue;
