import React from "react";

const View = () => {
    return (
        <div>
            <>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Portfolio" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <script
                    src="https://kit.fontawesome.com/fa62c117c7.js"
                    crossOrigin="anonymous"
                ></script>
                <link rel="stylesheet" href="styles.css" />
                <title>Raj Shekhar</title>
            </>
            <div className="light" id="top">
                <header className="header center">
                    <h3>
                        <a href="#navbar" className="link"
                        >LG.</a
                        >
                    </h3>

                    <nav className="nav center">
                        <ul className="nav__list center">
                            <li className="nav__list-item">
                                <a className="link link--nav" href="#projects">Projects</a>
                            </li>
                            <li className="nav__list-item">
                                <a className="link link--nav" href="#skills">Skills</a>
                            </li>
                            <li className="nav__list-item">
                                <a className="link link--nav" href="#contact">Contact</a>
                            </li>
                        </ul>

                        <button type="button" aria-label={"toggle theme"} className="btn btn--icon">
                            <i aria-hidden="true" id="btn-theme" className="fas fa-moon"></i>
                        </button>

                        <button
                            type="button"
                            aria-label={"toggle navigation"}
                            className="btn btn--icon nav__hamburger"
                        >
                            <i aria-hidden="true" className="fas fa-bars"></i>
                        </button>
                    </nav>
                </header>

                <main>
                    <div className="about center">
                        <h1>Hi, I am <span className="about__name">Liz Gaubatz.</span></h1>
                        <h2 className="about__role">A Full Stack Web Developer.</h2>
                        <p className="about__desc">
                            
                        </p>

                        <div className="about__contact center">
                            <a href="Hi! I am a Jr. Full Stack Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes. Bringing forth expertise in design, installation, testing and maintenance of web systems. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including Python, JavaScript, ASP.NET, C#, React, and Microsoft SQL Server. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.tps://example.com">
                                <span className="btn btn--outline">Resume</span>
                            </a>

                            <a
                                href="https://github.com/LizGaubatz"
                                aria-label="github"
                                className="link link--icon"
                            >
                                <i aria-hidden="true" className="fab fa-github"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/liz-gaubatz-502346176/"
                                aria-label="linkedin"
                                className="link link--icon"
                            >
                                <i aria-hidden="true" className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <section id="projects" className="section projects">
                        <h2 className="section__title">Projects</h2>

                        <div className="projects__grid">
                            <div className="project">
                                <h3>Project 1</h3>
                                <p className="project__description">
                                    Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                                    sapiente debitis labore sed ipsam Mollitia repellat illum quod
                                    unde beatae Quis
                                </p>
                                <ul className="project__stack">
                                    <li className="project__stack-item">SASS</li>
                                    <li className="project__stack-item">TypeScript</li>
                                    <li className="project__stack-item">React</li>
                                </ul>

                                <a
                                    href="https://github.com"
                                    aria-label="source code"
                                    className="link link--icon"
                                >
                                    <i aria-hidden="true" className="fab fa-github"></i>
                                </a>
                                <a
                                    href="https://example.com"
                                    aria-label="live preview"
                                    className="link link--icon"
                                >
                                    <i aria-hidden="true" className="fas fa-external-link-alt"></i>
                                </a>
                            </div>

                            <div className="project">
                                <h3>Project 2</h3>
                                <p className="project__description">
                                    Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                                    sapiente debitis labore sed ipsam Mollitia repellat illum quod
                                    unde beatae Quis
                                </p>
                                <ul className="project__stack">
                                    <li className="project__stack-item">SASS</li>
                                    <li className="project__stack-item">TypeScript</li>
                                    <li className="project__stack-item">React</li>
                                </ul>

                                <a
                                    href="https://github.com"
                                    aria-label="source code"
                                    className="link link--icon"
                                >
                                    <i aria-hidden="true" className="fab fa-github"></i>
                                </a>
                                <a
                                    href="https://example.com"
                                    aria-label="live preview"
                                    className="link link--icon"
                                >
                                    <i aria-hidden="true" className="fas fa-external-link-alt"></i>
                                </a>
                            </div>

                            <div className="project">
                                <h3>Project 3</h3>
                                <p className="project__description">
                                    Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                                    sapiente debitis labore sed ipsam Mollitia repellat illum quod
                                    unde beatae Quis
                                </p>
                                <ul className="project__stack">
                                    <li className="project__stack-item">SASS</li>
                                    <li className="project__stack-item">TypeScript</li>
                                    <li className="project__stack-item">React</li>
                                </ul>

                                <a
                                    href="https://github.com"
                                    aria-label="source code"
                                    className="link link--icon"
                                >
                                    <i aria-hidden="true" className="fab fa-github"></i>
                                </a>
                                <a
                                    href="https://example.com"
                                    aria-label="live preview"
                                    className="link link--icon"
                                >
                                    <i aria-hidden="true" className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="section skills" id="skills">
                        <h2 className="section__title">Skills</h2>
                        <ul className="skills__list">
                            <li className="skills__list-item btn btn--plain">HTML</li>
                            <li className="skills__list-item btn btn--plain">CSS</li>
                            <li className="skills__list-item btn btn--plain">JavaScript</li>
                            <li className="skills__list-item btn btn--plain">React</li>
                            <li className="skills__list-item btn btn--plain">Git</li>
                            <li className="skills__list-item btn btn--plain">C#</li>
                            <li className="skills__list-item btn btn--plain">.Net</li>
                            <li className="skills__list-item btn btn--plain">Flask</li>
                            <li className="skills__list-item btn btn--plain">JQuery</li>
                            <li className="skills__list-item btn btn--plain">MongoDB</li>
                            <li className="skills__list-item btn btn--plain">Express</li>
                            <li className="skills__list-item btn btn--plain">Python</li>
                            <li className="skills__list-item btn btn--plain">MySql</li>
                            <li className="skills__list-item btn btn--plain">Material UI</li>
                        </ul>
                    </section>

                    <section className="section contact center" id="contact">
                        <h2 className="section__title">Contact</h2>
                        <a href="mailto:gaubatz14@outlook.com">
                            <span className="btn btn--outline">Email me</span>
                        </a>
                    </section>
                </main>

                <footer className="footer">
                    <a
                        href="https://github.com/LizGaubatz"
                        className="link footer__link"
                    >
                    </a>
                </footer>

                <div className="scroll-container">
                    <div className="scroll-top">
                        <a aria-label="Scroll up" href="#top">
                            <i aria-hidden="true" className="fas fa-arrow-up"></i>
                        </a>
                    </div>
                </div>

                <script src="./script.js"></script>
            </div>
        </div>
    )
}

export default View;
