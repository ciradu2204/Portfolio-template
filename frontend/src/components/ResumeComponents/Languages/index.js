import { useEffect, useState } from "react"
import axios from "axios";
import Loader  from "../../SharedComponents/Loader";
import { wp_strip_all_tags } from "../../SharedComponents/stripTags";
import {Wrapper, LaunguagesHeader,LanguagesWrapper, LanguageWrapper,Title, Level } from './LanguagesElements'
import { nanoid } from "nanoid";
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const Languages = () =>{

    const [languages, setLanguages] = useState([]); 
    const [loading, setLoading ] = useState(false)

    const getLanguages = async () => {
        setLoading(true)
        await axios.get('http://localhost:8000/wp-json/wp/v2/languages?_embed&filter[orderby]=date&order=desc')
        .then((response) =>{
         for(let data of response.data){
              let language = {
                 "title" : data.title.rendered,
                 "description": data.content.rendered
               }
               setLanguages(prev => [...prev, language ])


         }
         setLoading(false)
        }).catch((error) => {
            setLoading(false)
            console.log(error)
        })

    }

    useEffect(() => {
        getLanguages()
        AOS.init({ duration: 1000 });
        return () => {
            setLanguages([])
        }
    }, [])

    return (
         <Wrapper>
             <LaunguagesHeader data-aos="fade-up">LANGUAGES</LaunguagesHeader>
             {loading? <Loader/> :
             <LanguagesWrapper>
                   { languages.map((language) => (
                     <LanguageWrapper key={nanoid()} data-aos="fade-up">
                       <Title>  {wp_strip_all_tags(language.title)} </Title>
                       <Level> {wp_strip_all_tags(language.description)}</Level>
                     </LanguageWrapper>
                   ))
                   
                  }
                </LanguagesWrapper>
              }
         </Wrapper>
    )

}

export default Languages