import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router';
import  Footer from '../../SharedComponents/Footer';
import {nanoid} from 'nanoid';
import parse from 'html-react-parser';

import { ProjectDescription, ProjectTitle, ProjectVisual , ProjectVisualDescription, ProjectImage, ProjectWrapper, ProjectMainWrapper, Prev, Next, NextProjectName, PrevProjectName} from './ProjectElement';

const Project = () => {
    
      const params  = useParams();
      const location = useLocation();
      const  [id, setId] = useState(params.id);
      const projects = location.state.project;
      const  [mouseOverPrev, setMouseOverPrev] = useState(false);
      const  [mouseOverNext, setMouseOverNext] = useState(false);
      const [titlePrev, setTitlePrev] = useState('');
      const [titleNext, setTitleNext] = useState('');
 
    const prevHandle = () => {
        if( id > 0){
            setId(id => parseInt(id) - 1);
            console.log("prev " + id);
         }
    }

    const NextHandle = () => {
        if( id < projects.length - 1){
            setId(id => parseInt(id) + 1)
        }
    }

     const handleNextTitle = () =>{
        if(id < projects.length - 1){
            let nextId = parseInt(id) + 1; 
             setTitleNext(projects[nextId].title.toUpperCase());

        }else{
            setTitleNext("");
        }

     }

     const handlePrevTitle = () =>{
        if(id  > 0){
            let prevId = parseInt(id) - 1; 
            setTitlePrev(projects[prevId].title.toUpperCase());
        }else{
            setTitlePrev("");
        }
     }


    const handleMousePrevOver = () => {
        handlePrevTitle()
        setMouseOverPrev(true);
    }

    const handleMousePrevOut = () =>{
        setMouseOverPrev(false);

    }

    const handleMouseNextOver = () =>{
        handleNextTitle();
        setMouseOverNext(true);

    }
    const handleMouseNextOut = () =>{
        setMouseOverNext(false);

    }

    return (
        <>
         {projects.filter((element, index) => index === parseInt(id)).map((project) =>(
        <ProjectMainWrapper key={nanoid()}>
        <Prev onClick={prevHandle} onMouseOver={handleMousePrevOver} onMouseOut={handleMousePrevOut}/>
        {mouseOverPrev && titlePrev? <PrevProjectName>{titlePrev}</PrevProjectName>:null}
        <ProjectWrapper>
        <ProjectImage src={project.image} />
        <ProjectTitle >{project.title.toUpperCase()}</ProjectTitle>
        <ProjectDescription>{parse(project.project_description)} </ProjectDescription>
        <ProjectVisual src={project.sampleVisual_image}/>
        <ProjectVisualDescription>{project.sampleVisual_description}</ProjectVisualDescription>
        </ProjectWrapper>
         <Next onClick={NextHandle} onMouseOver={handleMouseNextOver} onMouseOut={handleMouseNextOut} />
         {mouseOverNext && titleNext? <NextProjectName>{titleNext}</NextProjectName>:null}
         </ProjectMainWrapper>
         ))}
        <Footer />
        </>
        

    )
}

export default Project;