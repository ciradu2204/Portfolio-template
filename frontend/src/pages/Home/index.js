import React, { useEffect, useRef } from 'react';
import SocialMediaChannels from '../../components/SharedComponents/SocialMedias'
import Services from '../../components/HomeComponents/Services';
import Brands from '../../components/HomeComponents/Brands';
import { Header, DownIcon, Wrapper, Bold } from './HomeElements';
import Form from '../../components/HomeComponents/ContactForm'
import Footer from '../../components/SharedComponents/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    const myRef = useRef(null);
    const executeScroll = () =>{
        myRef.current.scrollIntoView();
    }
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <>
            <Wrapper>
                <SocialMediaChannels direction="column" color="#1E2128" />
                <Header data-aos="fade-up">HI I”m  <Bold>Randy Soumahoro</Bold></Header>
            </Wrapper>
            <DownIcon onClick={executeScroll} />
            <div ref={myRef}>
            <Services  />
            </div>
            <Brands />
            <Form />
            <Footer direction="column" color="green" copyright="© 2021 - Celine Ishimwe. All rights reserved. Kigali, Rwanda" gap="10%" />
        </>
    )
}

export default Home;