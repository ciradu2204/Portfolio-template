import React from 'react';
import { ServicesWrapper, ServicesHeader, ServiceWrapper, ServiceTitle, Wrapper, LineSvg } from './servicesElements';
import backend from "../../../img/backend.png"
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
        {id: 3,
         img: <img src={technicalWriting} alt="technical writing" style={serviceImg}/>,
         title: "Backend Development"
        }
    ]

    return (
        <>
            <Wrapper >
            <ServicesHeader >WHAT I DO</ServicesHeader>
            <LineSvg  viewBox="0, 0, 50,50">
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
                    <ServiceWrapper  key={service.id} >
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