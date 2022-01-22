import { useEffect, useState } from "react"
import axios from 'axios';
import {nanoid} from 'nanoid';
import { ProjectsWrapper, ProjectWrapper, ProjectImage, ProjectTitle, ProjectLink, Arrow } from "./ProjectsHomeElements";
import Loader from '../../SharedComponents/Loader';
import {API} from '../../../constants/index'
import { Link } from "react-router-dom";
import Footer from "../../SharedComponents/Footer";
const ProjectsHome = () =>{

    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    const getProjects  = async() =>{
        setLoading(true);
    await axios.get(`${API}/wp-json/wp/v2/work?&filter[orderby]=date&order=asc`)
         .then((response) => {
            setLoading(false);
             for(let data of response.data){
              let project = {
                   "title": data.acf.project_title,
                   "image": data.acf.project_image.url,
                    "project_description": data.acf.description,
                    "sampleVisual_image": data.acf.sample_visual.url,
                    "sampleVisual_description": data.acf.sampleVisual_description          
               }
              setProjects(projects => [...projects, project]);
             }
         }).catch((error) => {
            setLoading(false);
             console.log(error)
        })

    }


    useEffect (() => {
        getProjects();
        return () => {
            setProjects([]);
          };
    }, [])

    return (

        <>
        {loading?<Loader /> :
        <>
        <ProjectsWrapper> 

            { projects.map((project, index) =>(

               <Link to={{ pathname: `/work/${index}`, state:{project: projects}}} key= {nanoid()}>

                   <ProjectWrapper id={index +1} > 
                         <ProjectImage src={project.image}  id={index +1}/>
                         <ProjectTitle id={index +1}>
                             <h3>{project.title.toUpperCase()}</h3>
                             {index === 0 ? <ProjectLink to={{ pathname: `/work/${index}`, state:{project: project}}}> EXPLORE <Arrow/> </ProjectLink>: null}
                        </ProjectTitle>

                   </ProjectWrapper>
                    
               </Link>
            ))}
          
        </ProjectsWrapper>
        <Footer/>
        </>
            }
        </>
    )
   
 }

  export default ProjectsHome;