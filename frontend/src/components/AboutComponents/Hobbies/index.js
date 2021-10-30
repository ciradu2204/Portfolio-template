import React, { useEffect } from "react";
import Loader from '../../SharedComponents/Loader';
import { HobbiesWrapper, HobbyWrapper,  HobbyContent, HobbyImage } from "./HobbiesElements";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hobbies = ({hobbies, loading}) =>{

    useEffect(() =>{
        AOS.init({ duration: 1000 });
    }, [])

    return (
            <HobbiesWrapper> 
            {loading? <Loader/>:
                hobbies.map((hobby, index) =>(
                    <HobbyWrapper data-aos="fade-up" id={index + 1} key={index}>
                        <HobbyImage  data-aos="fade-left" src={hobby.image} id={index + 1}/>
                        <HobbyContent data-aos="fade-right">{hobby.content} </HobbyContent>
                    </HobbyWrapper>
                ))
            }

            </HobbiesWrapper>

    )

}

export default Hobbies; 