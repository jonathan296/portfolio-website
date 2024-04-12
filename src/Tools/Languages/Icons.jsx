function Icons() {
  const iconSize = "sm:h-16 sm:w-16 h-16 w-16 drop-shadow-lg mb-2 ";
  return (
    <>
      <div>
        <div className="m-1">
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-x-3 gap-y-7 text-[11px] sm:text-[14px]">
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/JavaScript.svg" />
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/html.svg" />
              <figcaption>HTML</figcaption>
            </figure>
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/css.svg" />
              <figcaption>CSS</figcaption>
            </figure>
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/nodejs-plain.svg" />
              <figcaption>Node.js</figcaption>
            </figure>
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/React.svg" />
              <figcaption>React</figcaption>
            </figure>
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/postgresql-plain.svg" />
              <figcaption>PostgreSQL</figcaption>
            </figure>
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/tailwindcss-plain.svg" />
              <figcaption>Tailwind</figcaption>
            </figure>
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/Express.svg" />
              <figcaption>Express</figcaption>
            </figure>
           
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/firebase-plain.svg" />
              <figcaption>Firebase</figcaption>
            </figure>
           
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/VSCode.svg" />
              <figcaption>VS Code</figcaption>
            </figure>
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/jira-original.svg" />
              <figcaption>Jira</figcaption>
            </figure>
            <figure
              className={`flex flex-col justify-center items-center py-1`}
            >
              <img className={iconSize} src="/Figma.svg" />
              <figcaption>Figma</figcaption>
            </figure>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Icons;
