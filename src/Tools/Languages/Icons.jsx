function Icons(){
    const iconSize ='h-20 w-20 drop-shadow-lg';
    return(
        <>
            <div >
              <div className="py-4">
                <div className="grid grid-cols-5 gap-4 ">
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/JavaScript.svg" />
                    <figcaption>JavaScript</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/html.svg" />
                    <figcaption>HTML</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/css.svg" />
                    <figcaption>CSS</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/nodejs-plain.svg" />
                    <figcaption>Node.js</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/React.svg" />
                    <figcaption>React</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/postgresql-plain.svg" />
                    <figcaption>PostgreSQL</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/tailwindcss-plain.svg" />
                    <figcaption>Tailwind</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/Express.svg" />
                    <figcaption>Express</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/git-plain.svg" />
                    <figcaption>Git</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/firebase-plain.svg" />
                    <figcaption>Firebase</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/npm-original-wordmark.svg" />
                    <figcaption>npm</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/VSCode.svg" />
                    <figcaption>VS Code</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/jira-original.svg" />
                    <figcaption>Jira</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/Figma.svg" />
                    <figcaption>Figma</figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center">
                    <img className={iconSize} src="/Miro.svg" />
                    <figcaption>Miro</figcaption>
                  </figure>
                </div>
              </div>
            </div>
        
        </>
    )
}

export default Icons;