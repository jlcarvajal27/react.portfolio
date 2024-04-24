import { useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Skills from "./component/Skill";
import Project from "./component/Project";
import Footer from "./component/Footer";

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    document.title = "React-Portfolio";
    AOS.init();
  }, []);

  return (
    <div className=" d-flex px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <About />
      <Skills />
      <Project />
      <div className="p-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
