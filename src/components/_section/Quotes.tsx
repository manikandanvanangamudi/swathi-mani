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
      className="relative w-full min-h-[60vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Soft vignette blobs */}
      <div className="absolute -left-24 -top-24 w-96 h-96 bg-amber-500/6 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-yellow-400/6 rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-6 py-20">
        <div className="w-full max-w-3xl">
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/60" />
            <svg
              className="w-8 h-8 text-yellow-300"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path d="M12 2c2.5 3 6 4 8 6s2 5 0 8-5 4-8 4-5-1-8-4-2-6 0-8 5-3 8-6z" fill="currentColor" opacity="0.9"/>
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/60" />
          </div>

          {/* Card */}
          <div className="group relative">
            {/* gold shimmer border (animated) */}
            <div
              aria-hidden
              className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                filter: "blur(14px)",
                transform: "translateZ(0)",
                background:
                  "linear-gradient(90deg, rgba(255,215,120,0) 0%, rgba(255,215,120,0.18) 40%, rgba(255,215,120,0.0) 70%)",
                animation: "shimmer 3.5s linear infinite",
                backgroundSize: "200% 100%",
              }}
            />

            <div className="relative bg-gradient-to-br from-slate-800/75 via-slate-800/55 to-slate-900/75 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-8 md:p-14 shadow-2xl transform transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-yellow-500/20">
              <div className="flex flex-col gap-6">
                {/* Headline (script) */}
                <h2
                  className={`${luxFont.className} text-3xl md:text-5xl text-yellow-50 text-center leading-tight`}
                  style={{ letterSpacing: "0.6px" }}
                >
                  <RevealText
                    text="Two souls walking as one."
                    duration={0.5}
                    stagger={0.12}
                    mode="sentence"
                    trigger="viewport"
                  />
                </h2>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-10 bg-gradient-to-r from-transparent to-yellow-400/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-300 shadow-md" />
                  <div className="h-px w-10 bg-gradient-to-l from-transparent to-yellow-400/60" />
                </div>

                {/* Description (serif) */}
                <p
                  className={`text-base md:text-lg text-center text-yellow-100/95 leading-relaxed font-light ${cormorant.className}`}
                >
                  <RevealText
                    text="May our journey be filled with harmony, love, and shared purpose — as we walk together in the seven sacred steps."
                    duration={0.45}
                    stagger={0.08}
                    mode="sentence"
                    trigger="viewport"
                  />
                </p>

                {/* Tagline */}
                <p
                  className={`${luxFont.className} text-lg md:text-xl text-center text-yellow-200 italic font-light tracking-wide`}
                >
                  <RevealText
                    text="From Sand to Snow, forever we GO"
                    duration={0.45}
                    stagger={0.12}
                    mode="sentence"
                    trigger="viewport"
                  />
                </p>

                {/* Footer small note */}
                <p className="text-xs text-center text-yellow-100/70">
                  <span className="font-medium">Muhurtham:</span> 17 June 2026 — 6:00 AM to 7:30 AM
                </p>
              </div>
            </div>
          </div>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-300 shadow-md" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/60" />
          </div>
        </div>
      </div>

      {/* shimmer keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default Quotes;
