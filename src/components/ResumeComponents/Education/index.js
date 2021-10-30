import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import  Loader  from '../../SharedComponents/Loader';
import { wp_strip_all_tags } from '../../SharedComponents/stripTags';
import {EducationHeader, EducationMainWrapper, EducationWrapper, Logo, EducationDetails, SchoolName, Major, Date, NextEducation, Wrapper } from './EducationElement';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    const initializeEndId = () =>{
      if(window.innerWidth >1000){
          return 2;
      }else{
          return 0;
      }
    }
    const [loading, setLoading] = useState(false);
    const [education, setEducation] = useState([]);
    const [numberOfItems] = useState(initializeEndId())
    const [endId ] = useState(initializeEndId()); 


    const getEducationDetails = async () => {
         setLoading(true);
        await axios.get('http://localhost:8000/wp-json/wp/v2/Education?_embed&filter[orderby]=date&order=desc')
            .then((response) =>{
             setLoading(false)
        
             for(let data of response.data){
                  const arr = data.content.rendered.split("\n\n\n\n");
                 let education = {
                     "title" : data.title.rendered,
                      "logo" : data._embedded['wp:featuredmedia'][0].source_url,
                      "major" :arr[0],
                      "date": arr[1]
                 }
                 setEducation(prev => [...prev, education])


             }
            }).catch((error) => {
                setLoading(false)
                console.log(error)
            })


    }

    const handleNextItem = () =>{
            let firstElement = education.shift();
            education.push(firstElement)
            setEducation([...education])  
 
    }



    useEffect(() =>{
        AOS.init({ duration: 1000 });
        getEducationDetails()
         return () =>{
             setEducation([])
         }
    }, [])




    return (
        <Wrapper>
        <EducationHeader data-aos="fade-up">EDUCATION</EducationHeader>

        <EducationMainWrapper>            
            {loading? <Loader /> : education.filter((elements, index) =>(index >= endId - numberOfItems && index <= endId)).map((elements, index) =>(
                <EducationWrapper key={nanoid()} data-aos="fade-up" >
                <Logo src={elements.logo}/>
                 <EducationDetails>
                     <SchoolName>
                         {elements.title.toUpperCase()}
                     </SchoolName>
                     <Major>
                         {wp_strip_all_tags(elements.major)}
                     </Major>
                     <Date>
                         {wp_strip_all_tags(elements.date)}
                     </Date>
                 </EducationDetails>
                </EducationWrapper>
                 
            ))
            
            }

             {loading? null: <NextEducation onClick={handleNextItem} data-aos="fade-up"/>}
        </EducationMainWrapper>
        </Wrapper>

    )
}

export default Education;