import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;