import { useEffect, useState } from "react"
import axios from "axios";
import { nanoid } from 'nanoid';
import Loader from '../../SharedComponents/Loader';
import { SkillsHeader, SkillsWrapper, UL, LI } from "./SkillsElements";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(false)


    const getSkills = async () => {
        setLoading(true)
        await axios.get('http://localhost:8000/wp-json/wp/v2/skills?_embed&filter[orderby]=date&order=desc')
            .then((response) => {
                for (let data of response.data) {
                    let skill = {
                        "title": data.title.rendered,
                    }
                    setSkills(prev => [...prev, skill])


                }
                setLoading(false)
            }).catch((error) => {
                setLoading(false)
                console.log(error)
            })

    }

    useEffect(() => {
        getSkills()
        AOS.init({ duration: 1000 });
        return () => {
            setSkills([])
        }
    }, [])

    return (
        <SkillsWrapper>
            <SkillsHeader data-aos="fade-up">SKILLS</SkillsHeader>
            {loading ? <Loader/> :
                <UL data-aos="fade-up">
                    {skills.map((skill) => (
                        <LI key={nanoid()}>{skill.title}</LI>
                    ))

                    }
                </UL>
            }
        </SkillsWrapper>
    )

}

export default Skills