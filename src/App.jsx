import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skill from "./Skill";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <section
        id="about"
        className="h-screen bg-green-100 flex items-center justify-center"
      >
        <About></About>
      </section>

      <section
        id="skill"
        className=" flex items-center justify-center text-center mx-auto"
      >
        <Skill></Skill>
      </section>

      <section
        id="portfolio"
        className="h-screen bg-yellow-100 flex items-center justify-center"
      >
        <Projects></Projects>
      </section>

      <section id="contact" className=" flex items-center justify-center">
        <Contact></Contact>
      </section>
    </>
  );
}

export default App;
