import React, { useEffect } from 'react';
import { ServicesWrapper, ServicesHeader, ServiceWrapper, ServiceTitle, Wrapper, LineSvg } from './servicesElements';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backend from "../../../img/backend.png"
import frontend from "../../../img/front-end.png"
import technicalWriting from "../../../img/writing.png"


const Services = () => {
    let serviceImg ={
        height: "3rem",
        width: "3rem"
    }
    let services = [
        {id: 1,
         img: <img src={backend} alt="Backend" style={serviceImg}/>,
         title: "Front-end Development"
        },
        {id: 2,
         img: <img src={frontend} alt="frontend" style={serviceImg}/>,
         title: "Back-end Development"
        },
        {id: 3,
         img: <img src={technicalWriting} alt="technical writing" style={serviceImg}/>,
         title: "Technical writing"
        }
    ]

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <>
            <Wrapper data-aos="fade-up">
            <ServicesHeader data-aos="fade-up">WHAT I DO</ServicesHeader>
            <LineSvg data-aos="fade-up" viewBox="0, 0, 50,50">
                <path
                d="
                 M -50 20
                 L 10 11
                 C 10 11 30 6 30 5
                 L 55 20
                 h 50
                 "/>
            </LineSvg>
            <ServicesWrapper>
                {services.map((service) => (
                    <ServiceWrapper data-aos="fade-up" key={service.id} >
                        {service.img}
                        <ServiceTitle>{service.title}</ServiceTitle>
                    </ServiceWrapper>
                ))}
            </ServicesWrapper>
            </Wrapper>
        </>
    )


}

export default Services;