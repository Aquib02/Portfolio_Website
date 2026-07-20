import Pic from "../assets/Pic.jpeg";

const Home = () => {
  return (
    <section id="home" className="bg-black text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <img
        src={Pic}
        className="w-36 h-36 rounded-full border-4 mb-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
        alt="profile"
      />

      <h1 className="text-4xl md:text-5xl font-bold">
        I am <span className="text-pink-400">Aquib Khan</span>, Software Developer
      </h1>

      <p className="mt-4 max-w-xl text-gray-300">
        Building modern, responsive, and scalable web applications with React.js, Node.js, Python and FastAPI .
      </p>
    </section>
  );
};

export default Home;