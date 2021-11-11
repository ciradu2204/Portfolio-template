import { useEffect, useState } from "react"
import axios from "axios";
import Loader  from "../../SharedComponents/Loader/index";
import { SkillsHeader, SkillsWrapper, UL, LI } from "../Skills/SkillsElements";
import { nanoid } from "nanoid";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToolsSoftware = () =>{

    const [tools, setTools] = useState([]); 
    const [loading, setLoading ] = useState(false)


    const getTools = async () => {
        setLoading(true)
        await axios.get('http://35.212.233.193/wp-json/acf/v3/Softwaretools?&filter[orderby]=date&order=asc')
        .then((response) =>{
         for(let data of response.data){
              let tool = {
                 "title" : data.acf.name,
               }
               setTools(prev => [...prev, tool])


         }
         setLoading(false)
        }).catch((error) => {
            setLoading(false)
            console.log(error)
        })

    }

    useEffect(() => {
        getTools()
        AOS.init({ duration: 1000 });
        return () => {
            setTools([])
        }
    }, [])

    return (
         <SkillsWrapper>
             <SkillsHeader data-aos="fade-up">TOOLS&SOFTWARE</SkillsHeader>
             {loading? <Loader/> :
               <UL data-aos="fade-up">
                   { tools.map((skill) => (
                    <LI key={nanoid()}>{skill.title}</LI>
                   ))}
               </UL>
            }
         </SkillsWrapper>
    )

}

export default ToolsSoftware