import RevealText from "@/components/ui/RevealText";
import CalendarCard from "@/components/ui/CalendarCard";
import { CountdownTimer } from "@/components/ui/CountDown";
import { Luxurious_Script, Playfair_Display, Cormorant_Garamond } from "next/font/google";

const secondFont = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DetailVenue = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-amber-950/40 to-slate-950 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600/15 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-700/10 rounded-full blur-3xl opacity-30" />

      {/* Content */}
      <div className="relative z-10 py-24 px-4">
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-20">
          
          {/* Main Title Section */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-amber-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-300 shadow-lg shadow-yellow-500/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-400 to-yellow-400" />
            </div>

            <h1 className={`text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-400 drop-shadow-2xl ${secondFont.className}`}>
              <RevealText
                text="Celebrations"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </h1>

            <p className={`text-2xl md:text-3xl text-yellow-100 font-light tracking-wider ${cormorant.className}`}>
              <RevealText
                text="Join us for two unforgettable nights"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-amber-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-300 shadow-lg shadow-yellow-500/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-400 to-yellow-400" />
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Muhurtham Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/25 to-amber-600/15 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 backdrop-blur-xl border border-yellow-400/40 rounded-3xl p-10 md:p-14 shadow-2xl hover:border-yellow-400/70 hover:shadow-yellow-500/30 transition-all duration-500 transform hover:scale-105">
                
                <div className="text-center space-y-8">
                  <div>
                    <p className="text-yellow-300/80 text-sm uppercase tracking-[0.25em] font-bold mb-3">
                      <RevealText
                        text="Sacred Ceremony"
                        trigger="viewport"
                        mode="sentence"
                        duration={0.8}
                      />
                    </p>
                    <h2 className={`text-5xl md:text-6xl font-black text-yellow-200 ${cormorant.className}`}>
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
                      <p className="text-yellow-300/70 text-sm uppercase tracking-widest font-bold">
                        <RevealText
                          text="Date"
                          trigger="viewport"
                          mode="sentence"
                          duration={0.8}
                        />
                      </p>
                      <p className="text-2xl md:text-3xl font-semibold text-yellow-50">
                        <RevealText
                          text="Wednesday, 17 June 2026"
                          trigger="viewport"
                          mode="sentence"
                          duration={0.8}
                        />
                      </p>
                    </div>

                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />

                    <div className="space-y-2">
                      <p className="text-yellow-300/70 text-sm uppercase tracking-widest font-bold">
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
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/25 to-amber-600/15 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 backdrop-blur-xl border border-yellow-400/40 rounded-3xl p-10 md:p-14 shadow-2xl hover:border-yellow-400/70 hover:shadow-yellow-500/30 transition-all duration-500 transform hover:scale-105">
                
                <div className="text-center space-y-8">
                  <div>
                    <p className="text-yellow-300/80 text-sm uppercase tracking-[0.25em] font-bold mb-3">
                      <RevealText
                        text="Evening Festivity"
                        trigger="viewport"
                        mode="sentence"
                        duration={0.8}
                      />
                    </p>
                    <h2 className={`text-5xl md:text-6xl font-black text-yellow-200 ${cormorant.className}`}>
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
                      <p className="text-yellow-300/70 text-sm uppercase tracking-widest font-bold">
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

                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />

                    <div className="space-y-2">
                      <p className="text-yellow-300/70 text-sm uppercase tracking-widest font-bold">
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
              <p className="text-yellow-300/80 text-sm uppercase tracking-[0.25em] font-bold">
                <RevealText
                  text="Moments Until Magic"
                  trigger="viewport"
                  mode="sentence"
                  duration={0.8}
                />
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-6 shadow-xl shadow-yellow-500/20">
              <CountdownTimer targetDate={"2026-06-17T06:00:00"} />
            </div>
          </div>

          {/* Venue Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/15 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 backdrop-blur-xl border border-yellow-400/40 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden hover:border-yellow-400/70 hover:shadow-yellow-500/30 transition-all duration-500">
              
              <div className="flex flex-col gap-8">
                <div className="text-center space-y-4">
                  <p className="text-yellow-300/80 text-sm uppercase tracking-[0.25em] font-bold">
                    <RevealText
                      text="Our Sacred Space"
                      trigger="viewport"
                      mode="sentence"
                      duration={0.8}
                    />
                  </p>
                  <h2 className={`text-5xl md:text-6xl font-black text-yellow-200 ${cormorant.className}`}>
                    <RevealText
                      text="The Venue"
                      trigger="viewport"
                      mode="sentence"
                      duration={0.8}
                    />
                  </h2>
                </div>

                <p className="text-center text-yellow-50/90 text-base md:text-lg leading-relaxed font-light">
                  <RevealText
                    text="T.T.D. Kalyana Mantapa"
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </p>

                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />

                <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-yellow-400/30 group/map hover:border-yellow-400/60 transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.908011476764!2d77.571164!3d13.005122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae162a55555555%3A0x97cd499d32daef68!2sTTD%20Kalyana%20Mantapa!5e0!3m2!1sen!2sus!4v1777953777691!5m2!1sen!2sus"
                    className="w-full h-full border-0 group-hover/map:opacity-95 transition-opacity duration-300"
                    allowFullScreen
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <a 
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.908011476764!2d77.571164!3d13.005122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae162a55555555%3A0x97cd499d32daef68!2sTTD%20Kalyana%20Mantapa!5e0!3m2!1sen!2sus!4v1777953777691!5m2!1sen!2sus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={`px-8 md:px-12 py-4 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 hover:from-yellow-200 hover:to-yellow-100 text-gray-950 font-black text-lg rounded-full shadow-xl hover:shadow-yellow-500/60 transition-all duration-300 transform hover:scale-110 uppercase tracking-[0.2em] ${cormorant.className}`}>
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
