import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../SharedComponents/Loader';
import { ServicesWrapper, ServicesHeader, ServiceWrapper, ServiceImg, ServiceTitle, Wrapper, LineSvg } from './ServicesElements';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {API} from '../../../constants/index'

 
const Services = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
 
    const getServices =  () => {
        setLoading(true);
         axios.get(`${API}/wp-json/wp/v2/Services?&filter[orderby]=date&order=asc`)
            .then((response) => {
                setLoading(false);
                 for(let data of response.data){
                  let service = {
                      "id": data.id,
                      "title": data.acf.name,
                      "image":  data.acf.service_image.url
                  }
                  setServices(services => [...services, service]);
                 }
             }).catch((error) => {
                setLoading(false);
                 console.log(error)
            })
     
    }

    useEffect(() => {
        AOS.init({ duration: 1000 })
        getServices();
        return () => {
            setServices([]);
          };
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
                {loading? <Loader/> :services.map((service) => (
                    <ServiceWrapper data-aos="fade-up" key={service.id} >
                        <ServiceImg alt="serviceImg" src={service.image} />
                        <ServiceTitle>{service.title}</ServiceTitle>
                    </ServiceWrapper>
                ))}
            </ServicesWrapper>
            </Wrapper>
        </>
    )


}

export default Services;