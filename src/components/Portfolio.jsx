const projects = [
  {
    id: "01",
    title: "Intelligent Hiring Gateway",
    desc: "AI-based resume analysis tool using React & Python.",
    link: "https://github.com/Aquib02",
  },
  {
    id: "02",
    title: "Resume Builder",
    desc: "Web-based resume builder that generates professional resumes in PDF format.",
    link: "https://github.com/Aquib02/Resume_Builder",
  },
  {
    id: "03",
    title: "Portfolio Website",
    desc: "Personal portfolio built with React and Tailwind CSS.",
    link: "https://github.com/Aquib02/Portfolio_Website",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black text-white py-20 px-10">
       
      <h2 className="text-4xl font-bold text-center mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Portfolio
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border border-white/20 rounded-xl p-6 
            flex flex-col justify-between 
            min-h-[250px]
            transition-all duration-300 
            hover:border-pink-500 
            hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] 
            hover:-translate-y-2"
          >
            
            {/* TOP CONTENT */}
            <div>
              <p className="text-gray-400 mb-4">{project.id}</p>

              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {project.desc}
              </p>
            </div>

            {/* BOTTOM BUTTON FIXED */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-sm flex items-center gap-2 
              group-hover:text-pink-400 transition"
            >
              View Project →
            </a>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Portfolio;