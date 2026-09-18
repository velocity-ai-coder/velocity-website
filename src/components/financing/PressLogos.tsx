const logos = [
  { name: "TechCrunch", text: "TechCrunch" },
  { name: "Times of India", text: "Times of India" },
  { name: "YourStory", text: "YourStory" },
  { name: "Indian Retailer", text: "Indian Retailer" },
  { name: "Entrepreneur", text: "Entrepreneur" },
  { name: "Business World", text: "BW Disrupt" },
  { name: "The Hindu BusinessLine", text: "Hindu BusinessLine" },
  { name: "Entrackr", text: "Entrackr" },
];

export default function PressLogos() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Supporting India's fastest growing Businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-gray-300 font-bold text-base md:text-lg tracking-tight hover:text-gray-500 transition-colors cursor-default"
            >
              {logo.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
