import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const [isDown, setIsDown] = useState(false);
  const changeNavBackground = () => {
    if (window.scrollY >= 100) {
      setIsDown(true);
    } else {
      setIsDown(false);
    }
  };
  window.addEventListener("scroll", changeNavBackground);
  return (
    <>
      <div className="">
        <header
          className={`sticky top-0 z-50 ${
            isDown
              ? "bg-white"
              : "bg-gradient-to-r from-indigo-50 to-indigo-100"
          }`}
        >
          <NavBar />
        </header>
        <ToastContainer autoClose={5000} />
        <section
          id="home"
          className="relative flex flex-col overflow-x-hidden bg-gradient-to-tr from-white to-indigo-100"
        >
          <Header />
        </section>
        <section
          id="projects"
          className="relative flex flex-col overflow-x-hidden"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="relative flex flex-col justify-start items-center overflow-x-hidden bg-indigo-600"
        >
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
