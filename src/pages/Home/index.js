import React, { useEffect, useRef } from 'react';
import SocialMediaChannels from '../../components/Shared/SocialMedias'
import Technologies from '../../components/Home/Technologies';
import {DownIcon, Wrapper } from './HomeElements';
import Form from '../../components/Home/ContactForm'
import Footer from '../../components/Shared/Footer';
import Header from '../../components/Home/Header'
import Services from '../../components/Home/Services'
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
                <Header/>
            </Wrapper>
            <DownIcon onClick={executeScroll} />
            <div ref={myRef}>
            <Services  />
            </div>
            <Technologies />
            <Form />
            <Footer direction="column" color="green" copyright="© 2023 - Iradukunda Cynthia. All rights reserved. Kigali, Rwanda" gap="10%" />
        </>
    )
}

export default Home;