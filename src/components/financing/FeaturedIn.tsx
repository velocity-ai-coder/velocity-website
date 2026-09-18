const outlets = [
  "TechCrunch",
  "Times of India",
  "YourStory",
  "Entrepreneur",
  "BW Disrupt",
  "The Hindu BusinessLine",
  "Indian Retailer",
  "Entrackr",
  "Startup Story Media",
];

export default function FeaturedIn() {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          FEATURED IN
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {outlets.map((outlet) => (
            <span
              key={outlet}
              className="text-gray-300 font-bold text-base md:text-lg tracking-tight hover:text-gray-500 transition-colors cursor-default"
            >
              {outlet}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
