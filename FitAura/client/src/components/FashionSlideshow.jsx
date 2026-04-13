import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=80",
    title: "Editorial Layers",
    description: "Sharp tailoring, rich neutrals, and runway-inspired everyday looks."
  },
  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80",
    title: "Street Luxe",
    description: "Confident silhouettes styled for modern city movement."
  },
  {
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
    title: "Seasonal Textures",
    description: "Fresh layers, bold essentials, and premium wardrobe staples."
  },
  {
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80",
    title: "Signature Moments",
    description: "Fashion-forward pieces curated for statement-making style."
  }
];

const FashionSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            Style Stories
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink dark:text-white sm:text-4xl">
            A Moving Lookbook
          </h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-10 bg-ink dark:bg-white" : "w-2.5 bg-zinc-300 dark:bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-[#efe2d6] p-3 shadow-soft dark:bg-[#241016]">
        <div className="relative h-[260px] overflow-hidden rounded-[1.6rem] sm:h-[340px] lg:h-[430px]">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-all duration-700 ${
                activeIndex === index ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            >
              <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <div className="max-w-md rounded-[1.5rem] bg-white/14 p-5 backdrop-blur-md dark:bg-black/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                    FitAura Select
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">{slide.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/85 sm:text-base">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FashionSlideshow;
