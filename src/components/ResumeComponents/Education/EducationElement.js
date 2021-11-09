import styled from "styled-components";
import { GrLinkNext } from 'react-icons/gr'

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
`
export const EducationHeader = styled.h2`
font-style: normal;
font-weight: 800;
font-size: 20px;
margin-left:5%;
line-height: 67px;
letter-spacing: 0.3em;
`

export const EducationMainWrapper = styled.div`
display:flex;
flex-direction: row; 
align-items:center;
justify-content:center; 
gap:10%;
`

export const NextEducation = styled(GrLinkNext)`
height: 10px;
width:12px;
padding:5px;
margin-right:5px;
cursor:pointer;
-webkit-appearance: none;
-moz-appearance:    none;
appearance:         none;   
-webkit-border-radius: 0;  /* Safari 3-4, iOS 1-3.2, Android 1.6- */    
-moz-border-radius: 0;  /* Firefox 1-3.6 */  
background: rgba(248, 201, 111, 0.52);
border-radius: 20px;


`

export const EducationWrapper = styled.div`
display:flex;
flex-direction:row;
align-items:center;
gap: 10px;
@media (max-width: 1000px) {
  gap: 10px;

}
`

export const Logo = styled.img`
width:100px;
height:50px;
 
`

export const EducationDetails = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`
export const SchoolName = styled.h3`
font-weight: 900;
font-size: 15px;
margin:2px 0;
letter-spacing: 0.05em;
font-style: normal;

`

export const Major = styled.h3`
font-style: normal;
font-weight: 500;
margin:2px 0;
font-size: 13px;
letter-spacing: 0.05em;

`

export const DateC = styled.h3`
font-style: normal;
font-weight: 500;
margin:2px 0;
font-size: 10px;
letter-spacing: 0.05em;

`
