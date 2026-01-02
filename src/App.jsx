import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skill from "./Skill";

function App() {
  return (
    <>
      <Navbar />

      <section id="about" className="w-full bg-black">
        <About />
      </section>

      <section id="skills" className="w-full bg-black">
        <Skill />
      </section>

      <section id="portfolio" className="w-full bg-black">
        <Projects />
      </section>

      <section id="contact" className="w-full bg-black">
        <Contact />
      </section>
    </>
  );
}

export default App;
