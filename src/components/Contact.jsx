const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20 px-10">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Contact{" "}
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Me
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT */}
        <div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
            Let’s talk
          </h3>

          <p className="text-gray-400 mb-6 leading-7">
            I’m currently available for new opportunities. Feel free to reach out
            anytime.
          </p>

          <div className="space-y-5">

            {/* Email */}
            <p className="flex items-center gap-3 text-gray-300 
            transition duration-300 hover:text-pink-400 hover:translate-x-1 hover:scale-105 cursor-pointer">
              📧 aquibkhan.2683@gmail.com
            </p>

            {/* Phone */}
            <p className="flex items-center gap-3 text-gray-300 
            transition duration-300 hover:text-pink-400 hover:translate-x-1 hover:scale-105 cursor-pointer">
              📞 +91 7408865227
            </p>

            {/* Location */}
            <p className="flex items-center gap-3 text-gray-300 
            transition duration-300 hover:text-pink-400 hover:translate-x-1 hover:scale-105 cursor-pointer">
              📍 India
            </p>

            {/* LinkedIn */}
<a
  href="https://linkedin.com/in/aquib-khan-6550b2294"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-gray-300 
  transition duration-300 hover:text-pink-400 hover:translate-x-1 hover:scale-105"
>
  {/* LinkedIn SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v12h-4zM8 8h3.6v1.7h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7V20h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V20H8z"/>
  </svg>
  LinkedIn
</a>

{/* GitHub */}
<a
  href="https://github.com/Aquib02"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-gray-300 
  transition duration-300 hover:text-pink-400 hover:translate-x-1 hover:scale-105"
>
  {/* GitHub SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.7-1.3-3.7-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.7-1.4-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.7 3 18.7 3.3 18.7 3.3c.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.4-2.7 5.4-5.2 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.2 5.4 18.3.5 12 .5z"/>
  </svg>
  GitHub
</a>

          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="space-y-6">
          
          {/* Name */}
          <div>
            <label className="text-sm text-gray-400">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded-md bg-[#1e293b] outline-none 
              transition duration-300
              hover:border hover:border-pink-500
              focus:ring-2 focus:ring-pink-500
              placeholder-gray-400 focus:placeholder-pink-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-md bg-[#1e293b] outline-none 
              transition duration-300
              hover:border hover:border-pink-500
              focus:ring-2 focus:ring-pink-500
              placeholder-gray-400 focus:placeholder-pink-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-400">Your Message</label>
            <textarea
              rows="5"
              placeholder="Enter your message"
              className="w-full mt-2 p-3 rounded-md bg-[#1e293b] outline-none 
              transition duration-300
              hover:border hover:border-pink-500
              focus:ring-2 focus:ring-pink-500
              placeholder-gray-400 focus:placeholder-pink-400"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="px-6 py-3 rounded-full font-medium 
            bg-gradient-to-r from-pink-500 to-orange-400 
            transition duration-300
            hover:scale-105 
            hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]"
          >
            Submit Now
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;