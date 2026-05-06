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
    <div className="relative w-full min-h-[50vh] bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 text-slate-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-200/15 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] px-4 py-16">
        <div className="w-full max-w-2xl flex flex-col gap-12">
          
          {/* Decorative Top Element */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
            <div className="w-2 h-2 rounded-full bg-amber-500 shadow-lg shadow-amber-400/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          {/* Main Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-rose-200/15 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white/90 backdrop-blur-xl border border-amber-300/60 rounded-3xl p-12 md:p-16 shadow-xl hover:shadow-2xl hover:border-amber-400/80 transition-all duration-500">
              
              <div className="flex flex-col gap-8">
                {/* Ornamental Divider Top */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-md shadow-amber-400/60" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
                </div>

                {/* Main Verse */}
                <p className={`text-xl md:text-2xl font-semibold text-center text-amber-900 leading-relaxed tracking-wide`}>
                  <RevealText
                    text="Two souls, one journey."
                    duration={0.4}
                    stagger={0.15}
                    mode="sentence"
                    trigger="viewport"
                  />
                </p>

                {/* Description */}
                <p className={`text-base md:text-lg text-center text-slate-700 leading-relaxed font-light ${cormorant.className}`}>
                  <RevealText
                    text="May our path be blessed with eternal love, shared dreams, and unwavering devotion — united in every moment, every step, forever."
                    duration={0.4}
                    stagger={0.08}
                    mode="sentence"
                    trigger="viewport"
                  />
                </p>

                {/* Ornamental Divider Bottom */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-md shadow-amber-400/60" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
                </div>

                {/* Tagline */}
                <p className={`text-lg md:text-xl text-center text-amber-600 italic font-light tracking-wide ${luxFont.className}`}>
                  <RevealText
                    text="From sun to snow, forever entwined"
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
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
            <div className="w-2 h-2 rounded-full bg-amber-500 shadow-lg shadow-amber-400/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
