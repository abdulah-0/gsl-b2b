import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const universities = [
  { id: 1, name: "Harvard University", country: "USA" },
  { id: 2, name: "Oxford University", country: "UK" },
  { id: 3, name: "MIT", country: "USA" },
  { id: 4, name: "Cambridge University", country: "UK" },
  { id: 5, name: "Stanford University", country: "USA" },
];

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {universities.map((uni) => (
          <div
            key={uni.id}
            className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pr-4"
          >
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-6 border border-slate-600 h-full">
              <div className="w-full h-32 bg-slate-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🏫</span>
              </div>
              <h4 className="font-bold text-white mb-2">{uni.name}</h4>
              <p className="text-slate-400 text-sm">{uni.country}</p>
              <button className="mt-4 w-full bg-cyan text-slate-900 font-semibold py-2 rounded-lg hover:bg-cyan/90 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

