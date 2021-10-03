import React from "react";
import { ToastContainer } from "react-toastify";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div>
        <header className="sticky top-0 bg-white z-50">
          <NavBar />
        </header>
        <ToastContainer autoClose={5000} />
        <section id="home" className="relative flex flex-col overflow-x-hidden">
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
