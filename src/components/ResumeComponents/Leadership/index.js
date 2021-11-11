import { useEffect, useState } from 'react'
import axios from 'axios';
import  Loader  from '../../SharedComponents/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAward} from '@fortawesome/free-solid-svg-icons/faAward'
import {LeadershipHeader, LeadershipMainWrapper, Prev, LeadershipsWrapper, LeadershipWrapper, LeadershipDetails, Date, Title, Next, Wrapper} from './LeadershipElements'
import { nanoid } from 'nanoid';
import {dateInPast} from '../../SharedComponents/dateInPast';
import AOS from 'aos';
import 'aos/dist/aos.css';
 const Leadership = () => {
    
    const [leadershipPositions, setLeadershipPositions] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [startId, setStartId] = useState(0);
    const [endId, setEndId] = useState(4); 
    const getLeadershipPosition = async() => {
        setLoading(true);
        await axios.get('http://35.212.233.193/wp-json/acf/v3/leadership?&filter[orderby]=date&order=asc')
            .then((response) =>{
             for(let data of response.data){
                  let leadershipPosition = {
                     "title" : data.acf.name,
                     "startDate": data.acf.startdate,
                    "endDate": data.acf.enddate
                  }
                  setLeadershipPositions(prev => [...prev, leadershipPosition])
 
 
             }
             setLoading(false)
            }).catch((error) => {
                setLoading(false)
                console.log(error)
            })
 
    }

    const handleNext = () => {
        
          if( endId < leadershipPositions.length -1){
              setEndId(prev => prev + 1);
              setStartId(prev => prev +1 );
          }
    }

    const handlePrev = () => {
        if(startId > 0 ){
            setEndId(prev => prev -1);
              setStartId(prev => prev - 1 );
        }
    }

    useEffect(() =>{
        AOS.init({ duration: 1000 });
        getLeadershipPosition()
    }, [])

    return (
        <>
        
        <Wrapper>
        <LeadershipHeader  data-aos="fade-up">LEADERSHIP</LeadershipHeader>
        {loading? <Loader/>: 
        <LeadershipMainWrapper>
        <Prev onClick= {handlePrev}  data-aos="fade-up"/>
        <LeadershipsWrapper> 
            {leadershipPositions.filter((element, index) => index >=startId && index <endId ).map((element) =>(
                <LeadershipWrapper key={nanoid()}  data-aos="fade-up">
                    <FontAwesomeIcon icon={faAward} size="2x"/>
                    <LeadershipDetails>
                        <Title>{(element.title).toUpperCase()}</Title>
                        <Date>{element.startDate}-{dateInPast(element.endDate)? element.endDate: "Present" } </Date>
                    </LeadershipDetails>
                </LeadershipWrapper>
            ) )}
        </LeadershipsWrapper>
        <Next onClick={handleNext}  data-aos="fade-up"/>
        </LeadershipMainWrapper>
         }
        </Wrapper>
       
        </>
    )
}

export default Leadership