import { useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [showHand, setShowHand] = useState(true);
  const [aboutHand, setAboutHand] = useState(false);
  const [projectHand, setProjectHand] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div>
      <div ref={myRef} id="vanta"></div>
      <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        {/**Header */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">Jonathan Alvarenga</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Front-End Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
              I build sick web stuff.
            </p>
            <ul
              className="ml-1 mt-8 flex items-center "
              aria-label="Social media"
            >
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-100 text-slate-300"
                  href="https://github.com/jonathan296"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>

              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-100 text-slate-300"
                  href="https://www.linkedin.com/in/jonathan-alvarenga/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <nav className="hidden lg:block " aria-label="In-page jump links">
              <ul className="mt-16 w-60 rounded-sm text-slate-200 outline-slate-200 outline bg-blue-800 p-6  opacity-95">
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#about"
                    onMouseEnter={() => setShowHand(true)}
                    onMouseLeave={() => setShowHand(false)}
                  >
                    {showHand && (
                      <img
                        src="/Sprite_Hand_Cursor.png"
                        className="w-8 mr-2"
                      ></img>
                    )}
                    <span className="transition-all  motion-reduce:transition-none font-Pixel text-2xl tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3 "
                    href="#experience"
                    onMouseEnter={() => setAboutHand(true)}
                    onMouseLeave={() => setAboutHand(false)}
                  >
                    {aboutHand && (
                      <img
                        src="/Sprite_Hand_Cursor.png"
                        className="w-8 mr-2"
                      ></img>
                    )}
                    <span className=" transition-all  motion-reduce:transition-none font-Pixel text-2xl tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3 "
                    href="#projects"
                    onMouseEnter={() => setProjectHand(true)}
                    onMouseLeave={() => setProjectHand(false)}
                  >
                    {projectHand && (
                      <img
                        src="/Sprite_Hand_Cursor.png"
                        className="w-8 mr-2"
                      ></img>
                    )}
                    <span className="transition-all  motion-reduce:transition-none font-Pixel text-2xl tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/**content container */}
        <div className="pt-24 lg:w-1/2 lg:py-24 ">
          {/**About Me Card */}
          <div className="rounded-sm text-slate-200 outline-slate-200 outline bg-blue-800 p-6 opacity-95">
            <h1 className="font-Pixel text-2xl mb-3">ABOUT ME</h1>
            <div className="flex flex-row  align-center">
              <div>
                <p className="mb-2">
                  Hey there, I'm Jonathan, a recent graduate of a full-stack web
                  development bootcamp, transitioning from a background in UX
                  research. I'm thrilled about diving into the dynamic world of
                  web development after spending time in UX. What excites me
                  most is the creative potential inherent in web development—the
                  ability to transform ideas into immersive experiences is
                  incredibly captivating. I bring a unique perspective shaped by
                  collaborating closely with UX designers and researchers, and
                  I'm eager to contribute this outlook.
                </p>
                <p className="mb-2">
                  My primary goal is to gain extensive team-oriented experience
                  and expand my skill set further. I'm actively seeking
                  opportunities in collaborative environments to contribute
                  meaningfully and help craft exceptional digital solutions. If
                  you're in need of a passionate web developer with a strong UX
                  foundation, driven by collaborative success, let's connect!
                  I'm excited about exploring new opportunities and making a
                  positive impact.
                </p>
              </div>
            </div>
          </div>
          {/**skills */}
          <div className="rounded-sm text-slate-200 outline-slate-200 outline bg-blue-800 opacity-95 p-6">
            <h1 className="font-Pixel text-2xl mb-3">SKILLS/ LANGUAGES</h1>
            <div className="flex flex-row  align-center">
              <div>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white shadow-lg rounded-xl w-[100px] h-[100px] flex flex-col justify-center items-center">
                    <img className="h-20 w-20" src="\src\assets\react.svg" />
                    <h2>React</h2>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl w-[100px] h-[100px] flex flex-col justify-center items-center">
                    <img className="h-20 w-20" src="\src\assets\react.svg" />
                    <h2>React</h2>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl w-[100px] h-[100px] flex flex-col justify-center items-center">
                    <img className="h-20 w-20" src="\src\assets\react.svg" />
                    <h2>React</h2>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl w-[100px] h-[100px] flex flex-col justify-center items-center">
                    <img className="h-20 w-20" src="\src\assets\react.svg" />
                    <h2>React</h2>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl w-[100px] h-[100px] flex flex-col justify-center items-center">
                    <img className="h-20 w-20" src="\src\assets\react.svg" />
                    <h2>React</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
