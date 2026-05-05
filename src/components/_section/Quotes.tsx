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
      description: "We met without knowing that life was quietly writing our story.",
    },
    {
      number: "TWO",
      title: "The Spark",
      subtitle: "Conversations & Endless Laughter",
      description: "What started as simple conversations turned into endless laughter and comfort.",
    },
    {
      number: "THREE",
      title: "The Bond",
      subtitle: "When Friendship Became Home",
      description: "Friendship became comfort, and comfort became home — a rare place to be ourselves.",
    },
    {
      number: "FOUR",
      title: "The Realization",
      subtitle: "Choosing Each Other for Life",
      description: "We realized we weren't just choosing each other for the moment — but for life.",
    },
    {
      number: "FIVE",
      title: "Destiny",
      subtitle: "What Felt Natural, Now Feels Written",
      description: "What felt natural from the beginning now feels like destiny written by the stars.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-stone-50 via-amber-50 to-stone-50 text-gray-950">
      {/* Main Title Section */}
      <div className="w-full px-4 py-12 md:py-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl flex flex-col gap-8">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${secondFont.className}`}>
              <RevealText
                text="Our Story"
                duration={0.3}
                stagger={0.1}
                trigger="viewport"
              />
            </h1>
          </div>

          <div className="text-center">
            <p className="text-base md:text-lg text-gray-700 italic">
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
            <div className="h-px w-10 bg-amber-300" />
          </div>
        </div>
      </div>

      {/* Chapters */}
      <div className="w-full px-4 py-8 md:py-12">
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-12">
          {chapters.map((chapter, index) => (
            <div key={index} className="flex flex-col gap-3">
              {/* Chapter Header */}
              <p className="text-xs md:text-sm font-bold text-amber-700 tracking-widest">
                <RevealText
                  text={`CHAPTER ${chapter.number} · ${chapter.title.toUpperCase()}`}
                  duration={0.3}
                  stagger={0.05}
                  trigger="viewport"
                />
              </p>

              <h3 className={`text-2xl md:text-3xl font-semibold text-gray-950 ${playfair.className}`}>
                <RevealText
                  text={chapter.subtitle}
                  duration={0.3}
                  stagger={0.08}
                  trigger="viewport"
                />
              </h3>

              {/* Chapter Description */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <RevealText
                  text={chapter.description}
                  duration={0.3}
                  stagger={0.02}
                  trigger="viewport"
                />
              </p>

              {/* Divider between chapters */}
              {index < chapters.length - 1 && (
                <div className="flex justify-center py-6">
                  <div className="h-px w-6 bg-amber-200" />
                </div>
              )}
            </div>
          ))}

          {/* Forever Section */}
          <div className="flex flex-col gap-4 pt-8 border-t-2 border-amber-200">
            <p className="text-xs md:text-sm font-bold text-amber-700 tracking-widest pt-4">
              <RevealText
                text="FOREVER · MAY 3, 2026"
                duration={0.3}
                stagger={0.05}
                trigger="viewport"
              />
            </p>

            <h3 className={`text-2xl md:text-3xl font-semibold text-gray-950 ${playfair.className}`}>
              <RevealText
                text="Stepping Into Our Forever"
                duration={0.3}
                stagger={0.08}
                trigger="viewport"
              />
            </h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              <RevealText
                text="With hearts full of gratitude and love, we step into our forever together."
                duration={0.3}
                stagger={0.02}
                trigger="viewport"
              />
            </p>
          </div>

          {/* Closing Tagline */}
          <div className="flex justify-center pt-8 pb-8">
            <p className={`text-2xl md:text-3xl italic text-amber-900 ${secondFont.className}`}>
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
