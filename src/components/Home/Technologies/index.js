import { useState } from "react"
import Prev from './prevIcon';
import Next from './nextIcon';
import { TechnologiesHeader, TechnologiesWrapper, TechnologyWrapper, TechnologyTitle } from "./TechnologiesElements";
import { LineSvg } from "../Services/servicesElements";
import { GrReactjs } from "react-icons/gr";
import { FaAws, FaCss3, FaHtml5} from "react-icons/fa";
import {DiDatabase, DiJavascript, DiJavascript1, DiNodejs} from "react-icons/di"

const Technologies = () => {
  const initializeNextId = () => {

    if (window.innerWidth <= 300) {
      return 1;
    } else if(window.innerWidth <= 600) {
      return 2;
    }else if(window.innerWidth <= 1000){
      return 3;
    }else{
      return 4;
    }
  }
  const [prevID, setPrevID] = useState(0);
  const [nextID, setNextID] = useState(initializeNextId());

  let technologies = [
     {id: 1,
      title: "React",
      icon: <GrReactjs fontSize={"3rem"}/>,
     },
     {id: 2,
      title: "AWS",
      icon: <FaAws fontSize={"3rem"}/>,
     },
     {
       id: 3,
       title: "CSS3",
       icon: <FaCss3 fontSize={"3rem"}/>
     },
     {
       id: 4,
       title: "HTML5",
       icon: <FaHtml5 fontSize={"3rem"}/>

     },
     {
      id: 5,
      title: "JavaScript",
      icon: <DiJavascript1 fontSize={"3rem"}/>

    },
    {
      id: 6,
      title: "ExpressJs",
      icon: <DiNodejs fontSize={"3rem"}/>

    },
    {
      id: 7,
      title: "MongoDb",
      icon: <DiDatabase fontSize={"3rem"}/>

    },
    {
      id: 8,
      title: "Playwright",
      icon: <DiJavascript1 fontSize={"3rem"}/>

    },
    {
      id: 9,
      title: "TypeScript",
      icon: <DiJavascript fontSize={"3rem"}/>

    },

  ]
  const previousBrand = () => {
    if (prevID > 0) {
      setPrevID((prevID) => prevID - 1)
      setNextID((nextID) => nextID - 1)
    }
  }

  const nextBrand = () => {
    if (nextID < technologies.length) {
      setPrevID((prevID) => prevID + 1)
      setNextID((nextID) => nextID + 1)
    }
  }


  return (
    <>
      <TechnologiesHeader >TECHNOLOGIES STACK</TechnologiesHeader>
      <LineSvg  viewBox="0, 0, 50,50">
        <path
          d="
                 M -155 20
                 L -80 11
                 C -80 11 -50 6 -50 5
                 L -10 20
                 h 200
                 "/>
      </LineSvg>
      <TechnologiesWrapper>
        {prevID > 0 && <Prev prev={previousBrand} />}
        {technologies.filter((element, index) => index >= prevID && index < nextID).map((technology) => (
          <TechnologyWrapper  key={technology.id}>
            {technology.icon}
            <TechnologyTitle>{technology.title}</TechnologyTitle>
          </TechnologyWrapper>
        ))}
        {nextID < technologies.length  && <Next next={nextBrand} />}
      </TechnologiesWrapper>
    </>
  )
}

export default Technologies;