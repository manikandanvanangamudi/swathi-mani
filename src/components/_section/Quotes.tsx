import RevealText from "../ui/RevealText";
import { Luxurious_Script, Playfair_Display } from "next/font/google";

const secondFont = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Quotes = () => {
  const chapters = [
    {
      number: "ONE",
      title: "The Beginning",
      subtitle: "Two Strangers, One Moment",
      description: "We met without knowing that life was quietly writing our story. No grand entrance, no dramatic first glance — just two people crossing paths at the right time.",
    },
    {
      number: "TWO",
      title: "The Spark",
      subtitle: "Conversations & Endless Laughter",
      description: "What started as simple conversations turned into endless laughter. Every talk felt effortless, every silence comfortable — as if we'd known each other all along.",
    },
    {
      number: "THREE",
      title: "The Bond",
      subtitle: "When Friendship Became Home",
      description: "Friendship slowly became comfort. Comfort became home. Without realizing it, we had built something rare — a place where we could simply be ourselves.",
    },
    {
      number: "FOUR",
      title: "The Realization",
      subtitle: "Choosing Each Other for Life",
      description: "Somewhere between being friends and becoming best friends, we realized we weren't just choosing each other for the moment — we were choosing each other for life.",
    },
    {
      number: "FIVE",
      title: "Destiny",
      subtitle: "What Felt Natural, Now Feels Written",
      description: "What felt natural from the beginning now feels like destiny. Every small moment, every shared dream — it was all leading here, to us, to this.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-950">
      {/* Main Title Section */}
      <div className="w-full px-4 py-16 md:py-24 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl flex flex-col gap-12">
          <div className="text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${secondFont.className}`}>
              <RevealText
                text="From Friends to Happiest Couple"
                duration={0.3}
                stagger={0.1}
                trigger="viewport"
              />
            </h1>
          </div>

          <div className="text-center">
            <h2 className={`text-4xl md:text-5xl font-semibold mb-6 ${playfair.className}`}>
              <RevealText
                text="Our Story"
                duration={0.3}
                stagger={0.1}
                trigger="viewport"
              />
            </h2>
            <p className="text-lg md:text-2xl text-gray-700 italic">
              <RevealText
                text="Life was quietly writing our story — we just had to live it"
                duration={0.3}
                stagger={0.1}
                trigger="viewport"
              />
            </p>
          </div>

          {/* Timeline Divider */}
          <div className="flex justify-center">
            <div className="h-px w-12 bg-gray-400" />
          </div>
        </div>
      </div>

      {/* Chapters */}
      <div className="w-full px-4 py-12 md:py-16">
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-20">
          {chapters.map((chapter, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Chapter Header */}
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base font-bold text-gray-500 tracking-widest">
                  <RevealText
                    text={`CHAPTER ${chapter.number} · ${chapter.title.toUpperCase()}`}
                    duration={0.3}
                    stagger={0.05}
                    trigger="viewport"
                  />
                </p>

                <h3 className={`text-3xl md:text-4xl font-semibold ${playfair.className}`}>
                  <RevealText
                    text={chapter.subtitle}
                    duration={0.3}
                    stagger={0.08}
                    trigger="viewport"
                  />
                </h3>
              </div>

              {/* Chapter Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                <RevealText
                  text={chapter.description}
                  duration={0.3}
                  stagger={0.02}
                  trigger="viewport"
                />
              </p>

              {/* Divider between chapters */}
              {index < chapters.length - 1 && (
                <div className="flex justify-center py-8">
                  <div className="h-px w-8 bg-gray-300" />
                </div>
              )}
            </div>
          ))}

          {/* Forever Section */}
          <div className="flex flex-col gap-8 pt-12 border-t border-gray-300">
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base font-bold text-gray-500 tracking-widest">
                <RevealText
                  text="FOREVER · MAY 3, 2026"
                  duration={0.3}
                  stagger={0.05}
                  trigger="viewport"
                />
              </p>

              <h3 className={`text-3xl md:text-4xl font-semibold ${playfair.className}`}>
                <RevealText
                  text="Stepping Into Our Forever"
                  duration={0.3}
                  stagger={0.08}
                  trigger="viewport"
                />
              </h3>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <RevealText
                text="With hearts full of gratitude and love, we step into our forever — together. Two families unite, two hearts become one, and a beautiful new chapter begins."
                duration={0.3}
                stagger={0.02}
                trigger="viewport"
              />
            </p>
          </div>

          {/* Closing Tagline */}
          <div className="flex justify-center pt-12">
            <p className={`text-3xl md:text-4xl italic text-gray-800 ${secondFont.className}`}>
              <RevealText
                text="From Sand to Snow, forever we GO"
                duration={0.3}
                stagger={0.1}
                trigger="viewport"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
