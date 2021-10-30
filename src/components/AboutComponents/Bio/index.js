import { useEffect, useState } from "react";
import Loader from '../../SharedComponents/Loader';
import Hobbies from "../Hobbies";
import {AboutWrapper, Content, BioWrapper, BioImage } from "./BioElements";
import Footer from "../../SharedComponents/Footer";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bio = () =>{

    const [bio, setBio] = useState([]); 
    const [hobbies, setHobbies] = useState([]);
    const [loading, setLoading] = useState(false);

    const filter_tags = (content) => {
        return  content.replace(/<p>(.*)<\/p>/g, "$1\n");
    }

   

    useEffect (() =>{
        AOS.init({ duration: 1000 });
        const getAboutInfo= async() =>{
            setLoading(true);
             await axios.get('http://localhost:8000/wp-json/wp/v2/About_me?_embed&filter[orderby]=date&order=asc')
              .then((response) =>{
                setLoading(false);
                 for(let data of response.data){
                       if(data.title.rendered === "Bio"){
                          setBio( {"content": filter_tags(data.content.rendered), "image": data._embedded['wp:featuredmedia'][0].source_url })
                       }else{
                           let Hobby = {
                               "content": filter_tags(data.content.rendered), 
                               "image": data._embedded['wp:featuredmedia'][0].source_url
                           }
                          setHobbies(hobbies => [...hobbies, Hobby ])
                      }
                }
                }).catch((error) =>{
                setLoading(false);
                console.log(error)
              })
    
        
    
        }
        getAboutInfo();
    }, [])


    return(
        <>
         {loading? <Loader/> :
         <div>
         <AboutWrapper>
        <BioWrapper>
            <BioImage data-aos="fade-up" src={bio.image}/>
            <Content data-aos="fade-up">{bio.content}</Content>
        </BioWrapper>
         
        <Hobbies hobbies={hobbies} loading={loading}/>
        </AboutWrapper>
        <Footer/>
        </div>
         }
       </>
       
    

    )


}

export default Bio;