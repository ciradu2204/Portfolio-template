import {Link } from 'react-router-dom';
import styled from "styled-components";
import {FiArrowRight} from 'react-icons/fi';



export const ProjectsWrapper = styled.div`
width:100%;
display:flex;
gap:3%;
justify-content: center;
flex-wrap: wrap;
`

export const ProjectLink = styled(Link)`
 
`

export const Arrow = styled(FiArrowRight)`
color:#C0A062;
font-size:25px;
`


export const ProjectWrapper = styled.div`
position: relative;
display: flex;
background-color:black;
justify-content: center;
margin-bottom: 10px; 
overflow: hidden;
`

export const ProjectTitle = styled.div`
position: absolute; 
line-height: 45px;
font-weight: 900;
letter-spacing: 0.3em;
display:${props => props.id === 1? "initial" : "none"};
bottom: ${props => props.id === 1? "10px" : "35%"}; 
color: white;
left: ${props => props.id === 1? " 3%" : "20%"};
& h3{
    margin:0;
    font-size: ${props => props.id === 1? "20px" : "15px"};
}

& ${ProjectLink} {
    color:#C0A062;
    text-decoration:none;
    font-size: 15px;
    display:flex;
    align-items:center;
}

transition: display 1s ease-in-out;
`

export const ProjectImage = styled.img`
width: ${props => props.id === 1? "90vw" : "350px"};
height:300px;  
object-fit:cover;
transition: transform .4s;

${ProjectWrapper}:hover &{
    transform: scale(1.3);
    opacity:0.6;
    transform-origin: 50% 50%;
}

${ProjectWrapper}:hover & + ${ProjectTitle}{
    display:initial;
}

@media (max-width: 1000px) {
    width: 350px;
 }
`
