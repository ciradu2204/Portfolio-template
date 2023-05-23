 import {AboutWrapper, Content, BioWrapper, BioImage } from "./BioElements";
import Footer from "../../Shared/Footer";
 import bioImage from "../../../img/bioImg.jpeg"
const Bio = () =>{

    return(
        <>
         <div>
         <AboutWrapper>
        <BioWrapper>
            <BioImage  src={bioImage}/>
            <Content >
            <p>When I was young, I always thought that I would become a chemical engineer considering my problem-solving, curiosity, and critical thinking skills. I went on and majored in math, physics, and chemistry in my highschool. But I realised that chemistry was not my cup of tea. </p>
            <p>When I finished high school, I was lucky enough to be part of the “She Can Code Bootcamp'' by Igire Rwanda. I learnt about Html, CSS, JavaScript, Bootstrap, and git and I built a fashion website as my first project to centralise all the fashion brands in Rwanda. Since then, I have been obsessed with the idea of using software to solve practical problems.</p>
            <p>My passion and effort for technology led me to win a scholarship to attend the African Leadership College(ALC), Mauritius which has a partnership with Glasgow Caledonian University(GCU). During the 4 years pursuing a computing degree, I learnt new programming languages, data structures, and algorithms with pretty much the same fascination that drove me to code. I also secured internships with different companies such as ALX, Collab Lab, Jenkins, and CircleEdges to mention a few. I am currently a front-end developer intern with the Boston's Children hospital as part of the Outreachy Program.</p>
            <p>When I am not coding, I blog on my experience and the knowledge I have gained so far in my career journey. In addition, I am a women techmakers ambassador where I organize events to introduce young people especially women to different technologies and help build a strong developer community in Rwanda.</p>
            </Content>
        </BioWrapper>
        </AboutWrapper>
        <Footer/>
        </div>
       </>
    )


}

export default Bio;