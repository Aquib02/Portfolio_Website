import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "Building responsive and scalable web applications using modern technologies like React and Tailwind CSS.",
    full: "I develop full-stack web applications with clean UI, optimized performance, and scalable architecture using modern frameworks."
  },
  {
    id: "02",
    title: "Frontend Design",
    desc: "Designing modern, responsive and user-friendly interfaces with a focus on user experience.",
    full: "I create visually appealing UI with proper layout, responsiveness, and smooth interactions using modern frontend tools."
  },
  {
    id: "03",
    title: "Backend APIs",
    desc: "Developing secure and efficient backend systems with RESTful APIs and database integration.",
    full: "I build backend services using Python and Flask with authentication, API development, and database handling."
  },
  {
    id: "04",
    title: "App Development",
    desc: "Creating fast and responsive applications focused on performance and usability.",
    full: "I design and develop application logic with smooth performance and user-friendly experience across devices."
  },
  {
    id: "05",
    title: "Digital Projects",
    desc: "Working on real-world projects including automation tools and AI-based solutions.",
    full: "I build practical digital solutions such as resume analyzers, automation systems, and AI-based applications."
  },
  {
    id: "06",
    title: "Content Creation",
    desc: "Creating technical content and documentation to simplify complex topics.",
    full: "I write structured technical content and guides to explain concepts clearly and improve understanding."
  },
];

const Services = () => {
  const [selected, setSelected] = useState(null); // NEW

  return (
    <section id="services" className="bg-black text-white py-20 px-10">
      
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">Services</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {services.map((service) => (
          <div
            key={service.id}
            className="group border border-white/20 rounded-xl p-6 
            flex flex-col justify-between 
            min-h-[250px]
            transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]
            hover:-translate-y-2"
          >
            <div>
              <p className="text-gray-400 mb-4">{service.id}</p>

              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {service.desc}
              </p>
            </div>

            {/* UPDATED Read More */}
            <button
              onClick={() => setSelected(service)}
              className="text-sm text-white flex items-center gap-2 group-hover:text-pink-500 transition"
            >
              Read More →
            </button>
          </div>
        ))}

      </div>

      {/* NEW MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-[#1e293b] p-6 rounded-xl max-w-md w-full mx-4">
            
            <h3 className="text-xl font-bold mb-4 text-pink-400">
              {selected.title}
            </h3>

            <p className="text-gray-300 mb-6">
              {selected.full}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="px-4 py-2 bg-pink-500 rounded hover:bg-pink-600 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
};

export default Services;