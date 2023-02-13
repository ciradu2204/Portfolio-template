import  ProjectsHome from "../../components/ProjectsComponents/ProjectsHome";
import { ProjectsHeader, ProjectsIntro } from "./ProjectsElements";


const Projects = () => {

    return (

         <>
         <ProjectsHeader>Projects</ProjectsHeader>
         <ProjectsIntro>The following are different projects I built using React, AWS, ExpressJs, and different CSS frameworks. Some of the projects, I have collaborated together with other developers.</ProjectsIntro>
         <ProjectsHome/>
         </>
    )
}

export default Projects;