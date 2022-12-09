import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Contact from "./components/Contact";
import ExperienceCard from "./components/ExperienceCard";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import webPage from "./img/web-page.png";
import desktopDev from "./img/desktop-dev.png";
import mobileApp from "./img/mobile-app.png";

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
          id="about"
          className="relative flex flex-col overflow-x-hidden bg-gradient-to-tr from-white to-indigo-100"
        >
          <About />
        </section>
        <h2 className="text-2xl text-center mt-16 font-robot font-bold">
          Specializing in
        </h2>
        <p></p>
        <section className="flex flex-col items-center md:flex-row justify-around lg:justify-evenly my-10">
          <ExperienceCard
            image={desktopDev}
            title="Desktop Applications"
            bio="Building desktop applications, mainly with Java and JavaFx."
          />
          <ExperienceCard
            image={webPage}
            title="Full Stack Web Development"
            bio="Creating web applications with javascript (React.js, Next.js) and php (Laravel)"
            isHighlight
          />
          <ExperienceCard
            image={mobileApp}
            title="Mobile Apps"
            bio="Building cross platform mobile applications with React Native."
          />
        </section>
        <section
          id="projects"
          className="relative flex flex-col overflow-x-hidden lg:px-20"
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
