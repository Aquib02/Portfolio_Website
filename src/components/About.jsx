import Pic from "../assets/Pic.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-10">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        About<span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text"> Me</span>
      </h2>

      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center overflow-hidden rounded-2xl">
          <img 
            src={Pic}
            alt="profile"
            className="w-70 h-80 group border border-white/20 rounded-xl p-0 transition duration-300   hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] "
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-gray-300 leading-7 mb-6">
            I am a passionate and dedicated software developer with a strong foundation in React and Python. I enjoy building modern, responsive, and user-friendly web applications that solve real-world problems.I focus on writing clean, efficient, and maintainable code while continuously learning new technologies and improving my development skills. My goal is to create impactful digital solutions and grow as a professional in the software industry..
          </p>

          {/* Skills */}
          <div className="space-y-5">
            {[
              { name: "HTML & CSS", width: "80%" },
              { name: "Python", width: "90%" },
              { name: "React.js", width: "85%" },
              { name: "JavaScript", width: "75%" },
            ].map((skill, i) => (
              <div key={i} className="group">

                <p className="mb-1 inline-block relative 
group-hover:text-pink-400 
transition duration-200 group-hover:scale-400
group-hover:translate-x-1">
                  {skill.name}</p>

                <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
                  <div
                    className="h-2 rounded bg-gradient-to-r from-pink-500 to-orange-400 
          transition-all duration-500 
          group-hover:scale-x-105 
          group-hover:shadow-[0_0_12px_rgba(236,72,153,0.8)]"
                    style={{ width: skill.width }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 text-center gap-10">

        {[
          { value: "10+", label: "PROJECTS BUILT" },
          { value: "90+", label: "DSA PROBLEMS" },
          { value: "15+", label: "TECH SKILLS" },
        ].map((item, i) => (
          <div
            key={i}
            className="transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] rounded-xl py-6"
          >
            <h3 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
              {item.value}
            </h3>
            <p className="mt-2 text-gray-400">{item.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default About;