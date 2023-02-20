import { useEffect, useState } from "react"
import axios from "axios";
import Loader  from "../../SharedComponents/Loader";
import {Wrapper, LaunguagesHeader,LanguagesWrapper, LanguageWrapper,Title, Level } from './LanguagesElements'
import { nanoid } from "nanoid";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {API} from '../../../constants/index';

 
const Languages = () =>{

    const [languages, setLanguages] = useState([]); 
    const [loading, setLoading ] = useState(false)

    const getLanguages = async () => {
        setLoading(true)
        await axios.get(`${API}/wp-json/wp/v2/languages?&filter[orderby]=date&order=asc`)
        .then((response) =>{
         for(let data of response.data){
              let language = {
                 "title" : data.acf.name,
                 "languageLevel": data.acf.fluency
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
                       <Title>  {language.title.toUpperCase()} </Title>
                       <Level> {language.languageLevel.toUpperCase()}</Level>
                     </LanguageWrapper>
                   ))
                   
                  }
                </LanguagesWrapper>
              }
         </Wrapper>
    )

}

export default Languages