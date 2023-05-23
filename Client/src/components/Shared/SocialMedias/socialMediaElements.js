import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineMail} from  'react-icons/ai';
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

import styled from "styled-components"


export const Wrapper = styled.div`
display: flex;
flex-direction: ${props => props.flexDirection || "row"};
gap: 2rem;
padding: 1rem;
justify-content: center;
`

export const Mail = styled(AiOutlineMail)`
color: ${props => props.iconcolor || "#C0A062"};
font-size: 1.5rem;
`

export const LinkedIn = styled(GrLinkedin)`
color: ${props => props.iconcolor || "#C0A062"};
font-size: 1.5rem;
`
export const Twitter = styled(AiFillTwitterCircle)`
color: ${props => props.iconcolor || "#C0A062"};
font-size: 1.5rem;
`
export const Github = styled(GrGithub)`
color: ${props => props.iconcolor || "#C0A062"};
font-size: 1.5rem;
`
export const Link = styled.a`
 text-decoration: none;
`

