import React, { useEffect, useState } from "react";
import {UL, LI, A, Next} from './paginationElements';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pagination = ({ workExperiencePerPage, totalWorkExperience, paginate, currentPage}) => {
     const [pageNumbers, setPageNumbers]  = useState([]);
 
    const handleClick = () => {
        let firstElement = pageNumbers.shift();
        pageNumbers.push(firstElement)
        setPageNumbers([...pageNumbers])  
    }

    useEffect(() =>{
        AOS.init({ duration: 1000 });
    
        for(let i=1; i<=Math.ceil(totalWorkExperience/workExperiencePerPage); i++){
            setPageNumbers(prev => [...prev, i]);
         }  
        return () =>{
            setPageNumbers([])
        }
    }, [totalWorkExperience, workExperiencePerPage])

    return(
             <UL data-aos="fade-up">
                 {pageNumbers.filter((elements, index) => index >=0 && index <2).map(number =>(
                    <LI key={number}  >
                        <A onClick={() => paginate(number)} currentPage={currentPage} number={number}>
                          {number}
                        </A>
                    </LI>
                ) )}
                {pageNumbers.length <=2 ? null: <Next onClick={handleClick}/> }
            </UL>
    )

}

export default Pagination;