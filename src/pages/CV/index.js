import React from "react";
import Education from "../../components/ResumeComponents/Education";
import Languages from "../../components/ResumeComponents/Languages";
 import Leadership from "../../components/ResumeComponents/Leadership";
import Skills from "../../components/ResumeComponents/Skills";
import ToolsSoftware from "../../components/ResumeComponents/ToolsSoftware";
import WorkExperience from "../../components/ResumeComponents/WorkExperience";
import Footer from "../../components/SharedComponents/Footer";
import {Wrapper} from "./CVElements";

const CV = () => {


    return (

        <>

         <Education/>
        <WorkExperience/>
        <Leadership/>
        <Wrapper>
        <Skills/>
        <ToolsSoftware/>
        </Wrapper>
        <Languages/>
        <Footer/>
        </>
    )



}

export default CV; 