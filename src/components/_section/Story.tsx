import RevealText from "@/components/ui/RevealText";
import ImageSlideshow from "@/components/ui/ImageSlideshow";
import { Luxurious_Script } from "next/font/google";

const secondFont = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
});

const IMAGES = [
  "/Slideshow_1.webp",
  "/Slideshow_2.webp",
  "/Slideshow_3.webp",
  "/Slideshow_4.webp",
];

const Story = () => {
  return (
    <div className="w-full px-4 flex flex-col justify-center text-gray-950">
      <div className="flex flex-col gap-12">
        {/* Main Title */}
        <div className="m-auto w-[90%] lg:w-[75%]">
          <h1 className={`text-5xl md:text-7xl text-center font-bold ${secondFont.className}`}>
            <RevealText
              text="From Friends to Happiest Couple"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h1>
        </div>

        {/* Subtitle */}
        <div className="m-auto w-[90%] lg:w-[75%]">
          <h2 className="text-3xl md:text-5xl text-center font-bold italic">
            <RevealText
              text="Our Story"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h2>
          <p className="text-center text-gray-600 mt-4 text-base md:text-lg">
            <RevealText
              text="Life was quietly writing our story — we just had to live it"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
        </div>

        {/* Image Slideshow */}
        <div className="w-full flex flex-col items-center justify-center overflow-hidden">
          <ImageSlideshow
            images={IMAGES}
            interval={2000}
            fadeDuration={1500}
            showArrows={true}
            className="w-[95%] md:w-[85%] h-[40vh] md:h-[60vh] lg:h-[70vh]"
          />
        </div>

        {/* Chapter One */}
        <div className="m-auto w-[90%] lg:w-[75%]">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-4">
            <RevealText
              text="Chapter One · The Beginning"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h3>
          <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4">
            <RevealText
              text="Two Strangers, One Moment"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h4>
          <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed">
            <RevealText
              text="We met without knowing that life was quietly writing our story. No grand entrance, no dramatic first glance — just two people crossing paths at the right time."
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
        </div>

        {/* Chapter Two */}
        <div className="m-auto w-[90%] lg:w-[75%]">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-4">
            <RevealText
              text="Chapter Two · The Spark"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h3>
          <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4">
            <RevealText
              text="Conversations & Endless Laughter"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h4>
          <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed">
            <RevealText
              text="What started as simple conversations turned into endless laughter. Every talk felt effortless, every silence comfortable — as if we'd known each other all along."
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
        </div>

        {/* Chapter Three */}
        <div className="m-auto w-[90%] lg:w-[75%]">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-4">
            <RevealText
              text="Chapter Three · The Bond"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h3>
          <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4">
            <RevealText
              text="When Friendship Became Home"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h4>
          <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed">
            <RevealText
              text="Friendship slowly became comfort. Comfort became home. Without realizing it, we had built something rare — a place where we could simply be ourselves."
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
        </div>

        {/* Chapter Four */}
        <div className="m-auto w-[90%] lg:w-[75%]">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-4">
            <RevealText
              text="Chapter Four · The Realization"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h3>
          <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4">
            <RevealText
              text="Choosing Each Other for Life"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h4>
          <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed">
            <RevealText
              text="Somewhere between being friends and becoming best friends, we realized we weren't just choosing each other for the moment — we were choosing each other for life."
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
        </div>

        {/* Chapter Five */}
        <div className="m-auto w-[90%] lg:w-[75%]">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-4">
            <RevealText
              text="Chapter Five · Destiny"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h3>
          <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4">
            <RevealText
              text="What Felt Natural, Now Feels Written"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h4>
          <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed">
            <RevealText
              text="What felt natural from the beginning now feels like destiny. Every small moment, every shared dream — it was all leading here, to us, to this."
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
        </div>

        {/* Forever */}
        <div className="m-auto w-[90%] lg:w-[75%]">
          <h3 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${secondFont.className}`}>
            <RevealText
              text="Forever · May 3, 2026"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h3>
          <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4">
            <RevealText
              text="Stepping Into Our Forever"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </h4>
          <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed pb-12">
            <RevealText
              text="With hearts full of gratitude and love, we step into our forever — together. Two families unite, two hearts become one, and a beautiful new chapter begins."
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
