import {GrNext} from "react-icons/gr";
import {GrPrevious} from 'react-icons/gr'
import styled from "styled-components";



export const BrandsWrapper = styled.div`
 
display:flex; 
justify-content: center;
align-items:center;
height:250px;
gap: 5%;
`
export const BrandWrapper = styled.div`
 
`
export const BrandImage = styled.img`
width:200px;
height:150px;
`

export const  BrandsHeader = styled.h1`
font-size: 25px;
 font-style: normal;
 line-height: 75px;
 font-weight: bolder;
 letter-spacing: 0.2em;
 text-align:center;

 @media (max-width: 1000px) {
   font-size:20px;
   }
 

`
export const Next = styled(GrNext)`
 font-size: 25px;
 cursor:pointer;
 align-self:center;
 `

export const Prev = styled(GrPrevious)`
 font-size: 25px;
 cursor:pointer;
 align-self:center;
`