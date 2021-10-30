import {AiFillTwitterCircle} from "react-icons/ai";
import {RiFacebookCircleFill} from 'react-icons/ri';
import {SiMailDotRu} from  'react-icons/si';
import {GrInstagram} from 'react-icons/gr';
import styled from "styled-components"


export const Wrapper = styled.div`
display: flex; 
flex-direction: ${props => props.flexDirection || "row"}; 
gap: 25px;
padding: 15px; 
justify-content: center; 
`

export const Facebook = styled(RiFacebookCircleFill)`
color: ${props => props.iconcolor || "#C0A062"}; 
font-size: 25px;
`

export const Mail = styled(SiMailDotRu)`
color: ${props => props.iconcolor || "#C0A062"}; 
font-size: 20px;
`

export const Instagram = styled(GrInstagram)`
color: ${props => props.iconcolor || "#C0A062"}; 
font-size: 20px;
`
export const Twitter = styled(AiFillTwitterCircle)`
color: ${props => props.iconcolor || "#C0A062"}; 
font-size: 25px;
`

export const Link = styled.a`
 text-decoration: none;
`

