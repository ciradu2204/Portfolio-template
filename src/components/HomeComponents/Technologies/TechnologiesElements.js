import {GrNext} from "react-icons/gr";
import {GrPrevious} from 'react-icons/gr'
import styled from "styled-components";

export const TechnologiesWrapper = styled.div`
display:flex;
justify-content: center;
align-items:center;
height:250px;
gap: 5%;
`
export const TechnologyWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const  TechnologiesHeader = styled.h1`
font-size: 1.5rem;
font-style: normal;
line-height: 3.5rem;
font-weight: bolder;
letter-spacing: 0.2em;
text-align:center;
`

export const TechnologyTitle = styled.h1`
font-weight: bolder;
color: rgba(2, 2, 2, 0.81);
font-size:1rem;
`

export const Next = styled(GrNext)`
 font-size: 1.5em;
 cursor:pointer;
 align-self:center;
 `

export const Prev = styled(GrPrevious)`
 font-size: 1.5em;
 cursor:pointer;
 align-self:center;
`