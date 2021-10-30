import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import  Loader  from "../../SharedComponents/Loader";
import { wp_strip_all_tags } from "../../SharedComponents/stripTags";
import Pagination from "./Pagination/pagination";
import {Wrapper, WorkExperienceHeader, WorkExperienceMainWrapper, WorkExperienceWrapper, Title, Role, Date} from './WorkExperienceElements';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkExperience = () =>{
     const getWorkExperiencePerPage = () =>{
         
        if(window.innerWidth> 1000){
            return 4
        }else{
            return 2
        }
     }
    const [loading, setLoading] = useState(false);
    const [workExperience, setWorkExperience] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [workExperiencePerPage] = useState(getWorkExperiencePerPage());

    const paginate = (number) => {
        setCurrentPage(number);
    }

    const getWorkExperience = async () => {
        setLoading(true);
       await axios.get('http://localhost:8000/wp-json/wp/v2/work_experience?_embed&filter[orderby]=date&order=desc')
           .then((response) =>{
            for(let data of response.data){
                 const arr = data.content.rendered.split("\n\n\n\n");
                let workExperience = {
                    "title" : data.title.rendered,
                     "role" :arr[0],
                     "date": arr[1]
                }
                setWorkExperience(prev => [...prev, workExperience])


            }
            setLoading(false)
           }).catch((error) => {
               setLoading(false)
               console.log(error)
           })


   }

   useEffect(() => {
    getWorkExperience();
    AOS.init({ duration: 1000 });
    return () =>{
        setWorkExperience([]);
    }
   }, [])

   const indexOfLastWorkExp = currentPage*workExperiencePerPage
   const indexOfFirstWorkExp = indexOfLastWorkExp - workExperiencePerPage;
   const currentWorkExp = workExperience.slice(indexOfFirstWorkExp,indexOfLastWorkExp)


    return (
        <Wrapper>
            <WorkExperienceHeader data-aos="fade-up">WORK EXPERIENCE</WorkExperienceHeader>
            
             <WorkExperienceMainWrapper>
         
                {loading ? <Loader/> : currentWorkExp.map((workExperience) => (
                    <WorkExperienceWrapper key={nanoid()} data-aos="fade-up">
                    <Title>{workExperience.title.toUpperCase()}</Title>
                    <Role>{wp_strip_all_tags(workExperience.role)}</Role>
                    <Date>{wp_strip_all_tags(workExperience.date)}</Date>
                    </WorkExperienceWrapper>
                ))   }
             </WorkExperienceMainWrapper>
          {loading? null: <Pagination workExperiencePerPage={workExperiencePerPage} totalWorkExperience={workExperience.length} paginate ={paginate} currentPage={currentPage} />}

        </Wrapper>

    )
}

export default WorkExperience; 