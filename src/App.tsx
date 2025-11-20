import Header from './components/Header/Header'
import { Element, scrollSpy } from "react-scroll";
import './App.css'
import {useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import ProjectCard from './components/ProjectCard/ProjectCard'

function App() {

    useEffect(() => {
        scrollSpy.update(); // Keeps scrollspy synced
    }, []);

    const { ref: aboutRef, inView: aboutInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: projectsRef, inView: projectsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: contactRef, inView: contactInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <>
        <Header></Header>
        <Element name="about" className="pt-[15vh] h-[100vh] scroll-mt-[10vh] flex items-start justify-center text-5xl font-bold bg-[var(--primary-color)] flex-row">

            <p ref={aboutRef} className={`text-white ${aboutInView ? 'animated-text' : ''}`}></p>

            <div className={"w-[50%] h-[75%] flex items-end justify-center flex-col gap-8 pr-16 z-30"}>
                <div className={"flex items-center justify-center w-[85%] gap-8"}>
                    <img className={`h-80 w-80 rounded-full object-cover ${aboutInView ? 'animated-text' : ''}`}
                       src="/cailean-matthews.jpg" alt="Image of Cailean M. Matthews"/>
                </div>
            </div>

            <div className={"w-[50%] h-[75%] flex items-start justify-center flex-col gap-8 pl-16 z-30"}>
                <h1 className={`text-4xl text-center w-[85%] ${aboutInView ? 'animated-text' : ''}`}>I'm Cailean Matthews.</h1>
                <h1 className={`text-center w-[85%] ${aboutInView ? 'animated-text' : ''} delay`}>A Software and Machine Learning Engineer.</h1>
                <p className={`text-2xl pt-4 font-medium w-[85%] text-center ${aboutInView ? 'animated-text' : ''} delay2`}>Currently a senior at University of North Carolina at Charlotte and
                planning to earn a Masters.
                </p>
            </div>

        </Element>

        <Element name="projects" className="pt-[5vh] h-[110vh] flex items-center justify-start text-5xl font-bold flex-col">
            <p ref={projectsRef} className={`text-white pb-16 ${projectsInView ? 'animated-text' : ''}`}>Projects</p>
            <div className={`w-[75%] flex gap-8 items-center justify-center flex-wrap ${projectsInView ? 'animated-text' : ''}`}>
                <div className={`project-delay ${projectsInView ? 'animated-text' : ''}`}><ProjectCard imgLink={"/toolbox_ai.png"} title={"Toolbox.ai"} description={"Developed during the 2025 CCI Startup Hackathon at UNCC"}></ProjectCard></div>
                <div className={`project-delay2 ${projectsInView ? 'animated-text' : ''}`}><ProjectCard imgLink={"/toolbox_ai.png"} title={"Toolbox.ai"} description={"Developed during the 2025 CCI Startup Hackathon at UNCC"}></ProjectCard></div>
                <div className={`project-delay3 ${projectsInView ? 'animated-text' : ''}`}><ProjectCard imgLink={"/toolbox_ai.png"} title={"Toolbox.ai"} description={"Developed during the 2025 CCI Startup Hackathon at UNCC"}></ProjectCard></div>
                <div className={`project-delay4 ${projectsInView ? 'animated-text' : ''}`}><ProjectCard imgLink={"/toolbox_ai.png"} title={"Toolbox.ai"} description={"Developed during the 2025 CCI Startup Hackathon at UNCC"}></ProjectCard></div>
                <div className={`project-delay5 ${projectsInView ? 'animated-text' : ''}`}><ProjectCard imgLink={"/toolbox_ai.png"} title={"Toolbox.ai"} description={"Developed during the 2025 CCI Startup Hackathon at UNCC"}></ProjectCard></div>
            </div>

        </Element>

        <Element name="contact" className="pt-[5vh] h-[90vh] flex items-center justify-start text-5xl font-bold bg-[var(--primary-color)] flex-col">
            <p ref={contactRef} className={`text-white ${contactInView ? 'animated-text' : ''}`}>Connect with Me!</p>

            <div className={`flex flex-row w-full h-full items-center`}>
                <div className={`flex flex-col gap-4 h-60 w-[100%] items-center`}>
                    <p className={`project-delay2 text-base text-[var(--tertiary-color)] ${contactInView ? 'animated-text-right' : ''}`}>Socials:</p>
                    <a href="https://www.linkedin.com/in/caileanmatthews/" target="_blank" className={`text-blue-400 text-2xl hover:text-blue-300 project-delay3 underline ${contactInView ? 'animated-text-right' : ''}`}>LinkedIn</a>
                    <a href="https://github.com/caileanmatthews" target="_blank" className={`text-blue-400 text-2xl hover:text-blue-300 underline project-delay4 ${contactInView ? 'animated-text-right' : ''}`}>Github</a>
                </div>
                <div className={"h-60 w-[100%] text-center flex flex-col gap-4"}>
                    <div><p className={`text-base project-delay2 text-[var(--tertiary-color)] ${contactInView ? 'animated-text-left' : ''}`}>Phone: </p>
                        <p className={`text-3xl project-delay3 ${contactInView ? 'animated-text-left' : ''}`}>828-638-2353</p></div>
                    <div>
                        <p className={`text-base project-delay4 text-[var(--tertiary-color)] ${contactInView ? 'animated-text-left' : ''}`}>Email: </p>
                        <p className={`text-3xl project-delay5 ${contactInView ? 'animated-text-left' : ''}`}>matthewsmcailean@gmail.com</p>
                    </div>
                </div>
            </div>

        </Element>
    </>
  )
}

export default App;
