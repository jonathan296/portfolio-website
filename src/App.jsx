import { useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import NET from "vanta/dist/vanta.net.min";
import { useEffect } from "react";
import { useRef } from "react";
import useSound from "use-sound";
import { useInView } from "react-intersection-observer";
import Icons from "./Tools/Languages/Icons";
function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isExpActive, setIsExpActive] = useState(false);

  const myRef = useRef(null);

  const [play] = useSound("/ff-select.mp3", { volume: 0.7 });

  const [ref, inView] = useInView({
    threshold: 0.7, // Adjust threshold as needed
    triggerOnce: false, // Trigger only once when the element enters the viewport
  });
  useEffect(() => {
    if (inView) {
      setIsActive(true);
    } else if (!inView) {
      setIsActive(false);
    }
  }, [inView]);

  const [ref2, inView2] = useInView({
    threshold: 1, // Adjust threshold as needed
    triggerOnce: false, // Trigger only once when the element enters the viewport
  });
  useEffect(() => {
    if (inView2) {
      setIsExpActive(true);
    } else if (!inView2) {
      setIsExpActive(false);
    }
  }, [inView2]);

  const [ref3, inView3] = useInView({
    threshold: 1, // Adjust threshold as needed
    triggerOnce: false, // Trigger only once when the element enters the viewport
  });
  useEffect(() => {
    if (inView3) {
      setIsAboutActive(true);
    } else if (!inView3) {
      setIsAboutActive(false);
    }
  }, [inView3]);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          spacing: 20.0,
          color: 0x3fbbff,
          backgroundColor: 0xb3066,
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
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-20 lg:py-0">
        {/**Header */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24 ">
          <div>
            <h1 className="text-3xl font-Pixel font-bold tracking-tight text-orange-500 sm:text-4xl drop-shadow-lg">
              <a href="/">Jonathan Alvarenga</a>
            </h1>
            <h2 className="mt-3 text-xl font-Pixel font-medium tracking-tight text-slate-200 sm:text-2xl drop-shadow-lg">
              Full-Stack Engineer
            </h2>

            <ul
              className="ml-1 mt-8 flex items-center "
              aria-label="Social media"
            >
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-100 text-slate-300 drop-shadow-lg"
                  href="https://www.linkedin.com/in/jonathan-alvarenga/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <img className="h-6 w-6" src="/linked_icon.png"></img>
                </a>
              </li>

              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-100 text-slate-300 drop-shadow-lg"
                  href="https://github.com/jonathan296"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <img className="h-6 w-6" src="/github_icon.png"></img>
                </a>
              </li>
            </ul>

            <nav className="hidden lg:block " aria-label="In-page jump links">
              <ul className="mt-16 w-60 rounded-sm text-slate-200">
                <li>
                  <a
                    className="group flex items-center py-3 "
                    href="#about"
                    onMouseEnter={() => {
                      setIsAboutActive(true),
                        play(),
                        inView && setIsActive(false),
                        inView2 && setIsExpActive(false);
                    }}
                    onMouseLeave={() => {
                      !inView3 && setIsAboutActive(false),
                        inView && setIsActive(true),
                        inView2 && setIsExpActive(true);
                    }}
                  >
                    {isAboutActive && (
                      <img
                        src="/Sprite_Hand_Cursor.png"
                        className="w-8 mr-2 drop-shadow-lg"
                      ></img>
                    )}
                    <span
                      className={`transition-all  motion-reduce:transition-none font-Pixel text-2xl tracking-widest ${
                        isAboutActive
                          ? "text-slate-200 drop-shadow-lg"
                          : "text-slate-500"
                      } group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                    >
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3 "
                    href="#experience"
                    onMouseEnter={() => {
                      setIsExpActive(true),
                        play(),
                        inView && setIsActive(false),
                        inView3 && setIsAboutActive(false);
                    }}
                    onMouseLeave={() => {
                      !inView2 && setIsExpActive(false),
                        inView && setIsActive(true),
                        inView3 && setIsAboutActive(true);
                    }}
                  >
                    {isExpActive && (
                      <img
                        src="/Sprite_Hand_Cursor.png"
                        className="w-8 mr-2 drop-shadow-lg"
                      ></img>
                    )}
                    <span
                      className={`transition-all  motion-reduce:transition-none font-Pixel text-2xl tracking-widest ${
                        isExpActive
                          ? "text-slate-200 drop-shadow-lg"
                          : "text-slate-500"
                      } group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                    >
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3 "
                    href="#projects"
                    onMouseEnter={() => {
                      setIsActive(true),
                        play(),
                        inView2 && setIsExpActive(false),
                        inView3 && setIsAboutActive(false);
                    }}
                    onMouseLeave={() => {
                      !inView && setIsActive(false),
                        inView2 && setIsExpActive(true),
                        inView3 && setIsAboutActive(true);
                    }}
                  >
                    {isActive && (
                      <img
                        src="/Sprite_Hand_Cursor.png"
                        className="w-8 mr-2 drop-shadow-lg"
                      ></img>
                    )}
                    <span
                      className={`transition-all  motion-reduce:transition-none font-Pixel text-2xl tracking-widest ${
                        isActive
                          ? "text-slate-200 drop-shadow-lg"
                          : "text-slate-500"
                      } group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                    >
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/**content container */}
        <div
          id="about"
          className="pt-20 lg:w-3/5 lg:py-24 flex flex-col gap-6 sm:gap-9 lg:pl-9 "
        >
          {/**About Me */}
          <div
            ref={ref3}
            className="rounded-lg text-slate-200 bg-slate-700 bg-opacity-40 backdrop-blur p-3 shadow-xl "
          >
            <h1 className="font-Pixel text-2xl mb-3 text-lime-400 drop-shadow-md">
              About Me
            </h1>
            <div className="flex flex-row  align-center">
              <div className="leading-7">
                <p className="mb-3 drop-shadow-md">
                  Hey there, I'm Jonathan, a recent graduate of a full-stack web
                  development bootcamp, transitioning from a background in UX
                  research. I'm thrilled about diving into the world of web
                  development after spending time in UX. What excites me most is
                  the creative potential inherent in web development and the
                  ability to transform ideas into immersive experiences.
                </p>
                <p className="mb-2 drop-shadow-md">
                  My primary goal is to gain extensive team-oriented experience
                  and expand my skill set further. I'm actively seeking
                  opportunities in collaborative environments to contribute
                  meaningfully and help craft exceptional digital solutions. If
                  you're in need of a passionate web developer with a strong UX
                  foundation let's connect!
                </p>
              </div>
            </div>
          </div>
          {/**skills */}
          <span id="experience"></span>
          <div
            ref={ref2}
            className="bg-contain bg-center bg-no-repeat rounded-lg text-slate-200 outline-slate-200 backdrop-blur bg-slate-700 shadow-xl bg-opacity-40 lg:p-3 lg:pb-3 p-3 "
          >
            <h1 className="font-Pixel text-2xl mb-3 text-purple-400 drop-shadow-md">
              Tools/Languages
            </h1>
            <Icons></Icons>
          </div>
          {/**Projects */}
          <span id="projects"></span>
          <div
            ref={ref}
            className="rounded-lg text-slate-200 bg-slate-700 bg-opacity-40 backdrop-blur shadow-xl p-3"
          >
            <h1 className="font-Pixel text-2xl mb-3 text-red-400 drop-shadow-md">
              Projects
            </h1>
            <div className="flex flex-col gap-4">
              <div className="w-56 ">
                <img src="/MockImage.jpg"></img>
              </div>
              <div className=" w-56 ">
                <img src="/MockTODO.jpg"></img>
              </div>
              <div className=" w-56">
                <img src="/MockMAP.jpg"></img>
              </div>
              <div className="w-56">
                <img src="/MockGAME.jpg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
