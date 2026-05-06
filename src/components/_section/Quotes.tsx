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
    <div className="relative w-full min-h-[50vh] bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 text-slate-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] px-4 py-16">
        <div className="w-full max-w-2xl flex flex-col gap-12">
          
          {/* Decorative Top Element */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400" />
            <div className="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-300/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400" />
          </div>

          {/* Main Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-purple-100/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-white/95 backdrop-blur-xl border border-purple-200/40 rounded-3xl p-12 md:p-16 shadow-lg hover:shadow-xl hover:border-purple-300/60 transition-all duration-500">
              
              <div className="flex flex-col gap-8">
                {/* Ornamental Divider Top */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 bg-gradient-to-r from-purple-400 to-amber-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-md shadow-purple-300/60" />
                  <div className="h-px w-8 bg-gradient-to-l from-purple-400 to-amber-400" />
                </div>

                {/* Main Verse */}
                <p className={`text-xl md:text-2xl font-bold text-center text-slate-900 leading-relaxed tracking-wide`}>
                  <RevealText
                    text="Two souls, one journey."
                    duration={0.4}
                    stagger={0.15}
                    mode="sentence"
                    trigger="viewport"
                  />
                </p>

                {/* Description */}
                <p className={`text-base md:text-lg text-center text-purple-900/80 leading-relaxed font-light ${cormorant.className}`}>
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
                  <div className="h-px w-8 bg-gradient-to-r from-purple-400 to-amber-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-md shadow-purple-300/60" />
                  <div className="h-px w-8 bg-gradient-to-l from-purple-400 to-amber-400" />
                </div>

                {/* Tagline */}
                <p className={`text-lg md:text-xl text-center text-purple-700 italic font-light tracking-wide ${luxFont.className}`}>
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
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400" />
            <div className="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-300/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
