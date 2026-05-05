import RevealText from "../ui/RevealText";
import { Luxurious_Script, Cormorant_Garamond } from "next/font/google";

const luxFont = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Quotes = () => {
  return (
    <div className="relative w-full min-h-[50vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] px-4 py-16">
        <div className="w-full max-w-2xl flex flex-col gap-12">
          
          {/* Decorative Top Element */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-300 shadow-lg shadow-yellow-500/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400" />
          </div>

          {/* Main Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/15 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 backdrop-blur-xl border border-yellow-400/40 rounded-3xl p-12 md:p-16 shadow-2xl hover:border-yellow-400/70 hover:shadow-yellow-500/30 transition-all duration-500">
              
              <div className="flex flex-col gap-8">
                {/* Ornamental Divider Top */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-yellow-400/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-yellow-400/60" />
                </div>

                {/* Main Verse */}
                <p className={`text-xl md:text-2xl font-semibold text-center text-yellow-50 leading-relaxed tracking-wide`}>
                  <RevealText
                    text="Two souls walking as one."
                    duration={0.4}
                    stagger={0.15}
                    mode="sentence"
                    trigger="viewport"
                  />
                </p>

                {/* Description */}
                <p className={`text-base md:text-lg text-center text-yellow-100/90 leading-relaxed font-light ${cormorant.className}`}>
                  <RevealText
                    text="May our journey be filled with harmony, love, and shared purpose — as we walk together in the seven sacred steps."
                    duration={0.4}
                    stagger={0.08}
                    mode="sentence"
                    trigger="viewport"
                  />
                </p>

                {/* Ornamental Divider Bottom */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-yellow-400/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-yellow-400/60" />
                </div>

                {/* Tagline */}
                <p className={`text-lg md:text-xl text-center text-yellow-200 italic font-light tracking-wide ${luxFont.className}`}>
                  <RevealText
                    text="From Sand to Snow, forever we GO"
                    duration={0.4}
                    stagger={0.12}
                    mode="sentence"
                    trigger="viewport"
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Bottom Element */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-300 shadow-lg shadow-yellow-500/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
