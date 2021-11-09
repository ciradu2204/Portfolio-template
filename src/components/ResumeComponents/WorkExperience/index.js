import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import  Loader  from "../../SharedComponents/Loader";
import Pagination from "./Pagination/pagination";
import {Wrapper, WorkExperienceHeader, WorkExperienceMainWrapper, WorkExperienceWrapper, Title, Role, DateC} from './WorkExperienceElements';
import AOS from 'aos';
import {dateInPast} from '../../SharedComponents/dateInPast';
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
       await axios.get('http://34.145.124.47/wp-json/acf/v3/WorkExperience?&filter[orderby]=date&order=asc')
           .then((response) =>{
            for(let data of response.data){
                let workExperience = {
                    "title" :  data.acf.name,
                    "role":data.acf.role,
                    "startDate": data.acf.start_date,
                    "endDate": data.acf.end_date
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
                    <Role>{(workExperience.role)}</Role>
                    <DateC>{(workExperience.startDate)}-{(dateInPast(workExperience.endDate)? workExperience.endDate: "Present" )}</DateC>
                    </WorkExperienceWrapper>
                ))   }
             </WorkExperienceMainWrapper>
          {loading? null: <Pagination workExperiencePerPage={workExperiencePerPage} totalWorkExperience={workExperience.length} paginate ={paginate} currentPage={currentPage} />}

        </Wrapper>

    )
}

export default WorkExperience; 