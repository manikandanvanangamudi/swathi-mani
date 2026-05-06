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
    <section
      aria-label="Wedding quote"
      className="relative w-full min-h-[60vh] bg-gradient-to-br from-amber-50 via-amber-100 to-rose-50 text-slate-900 overflow-hidden"
    >
      {/* Soft warm blobs */}
      <div className="absolute -left-24 -top-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl opacity-80 pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl opacity-70 pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-6 py-20">
        <div className="w-full max-w-3xl">
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/60" />
            <svg
              className="w-8 h-8 text-amber-500"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M12 2c2.5 3 6 4 8 6s2 5 0 8-5 4-8 4-5-1-8-4-2-6 0-8 5-3 8-6z"
                fill="currentColor"
                opacity="0.95"
              />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/60" />
          </div>

          {/* Card */}
          <div className="group relative">
            {/* subtle glow border */}
            <div
              aria-hidden
              className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                filter: "blur(10px)",
                background:
                  "linear-gradient(90deg, rgba(255,236,209,0) 0%, rgba(255,215,120,0.18) 40%, rgba(255,236,209,0) 100%)",
              }}
            />

            <div className="relative bg-white/80 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-8 md:p-14 shadow-lg transform transition-all duration-500 group-hover:-translate-y-1">
              <div className="flex flex-col gap-6">
                {/* Headline (script) */}
                <h2
                  className={`${luxFont.className} text-3xl md:text-4xl text-amber-700 text-center leading-tight`}
                  style={{ letterSpacing: "0.4px" }}
                >
                  <RevealText
                    text="Two souls, one journey."
                    duration={0.45}
                    stagger={0.12}
                    mode="sentence"
                    trigger="viewport"
                  />
                </h2>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-10 bg-gradient-to-r from-transparent to-amber-300/80" />
                  <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                  <div className="h-px w-10 bg-gradient-to-l from-transparent to-amber-300/80" />
                </div>

                {/* Description (serif) */}
                <p
                  className={`text-base md:text-lg text-center text-slate-700 leading-relaxed font-light ${cormorant.className}`}
                >
                  <RevealText
                    text="May our life together be blessed with harmony, laughter, and unwavering devotion as we take the seven sacred steps."
                    duration={0.45}
                    stagger={0.08}
                    mode="sentence"
                    trigger="viewport"
                  />
                </p>

                {/* Tagline */}
                <p
                  className={`${luxFont.className} text-lg md:text-xl text-center text-amber-600 italic font-light tracking-wide`}
                >
                  <RevealText
                    text="From Sand to Snow — Together Always"
                    duration={0.45}
                    stagger={0.12}
                    mode="sentence"
                    trigger="viewport"
                  />
                </p>

                {/* Footer small note */}
                <p className="text-sm text-center text-slate-600/90">
                  <span className="font-medium">Muhurtham:</span> 17 June 2026 — 6:00 AM to 7:30 AM
                </p>
              </div>
            </div>
          </div>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-300/60" />
            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-300/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
