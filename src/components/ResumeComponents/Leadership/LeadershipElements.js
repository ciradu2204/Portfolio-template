import styled from "styled-components";
import {GrFormPrevious} from 'react-icons/gr';
import {GrFormNext} from "react-icons/gr";

export const Wrapper = styled.div`
background: rgba(192, 160, 98, 0.6);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media (max-width: 1000px) {
    width:100%;
    padding-bottom:10px;
  }
`
export const LeadershipHeader = styled.h2`
font-style: normal;
font-weight: 800;
font-size: 20px;
margin:0;
padding-top:10px;
margin-left:5%;
letter-spacing: 0.3em;
`
export const LeadershipMainWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:1%;
`
export const LeadershipsWrapper = styled.div`
display: flex; 
width: 90%;
gap: 2%;

@media (max-width: 1000px) {
    width:100%;
    flex-wrap: nowrap;
    flex-direction:column;
  }
`

export const Prev = styled(GrFormPrevious)`
cursor:pointer;
font-size: 30px;
`

export const LeadershipWrapper = styled.div`
display:flex;
width: 25%;
padding:10px;
justify-content:center;
margin:20px 0;
align-items:center;
gap: 2%;
 flex-direction: row; 
background: rgba(255, 255, 255, 0.85);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

@media (max-width: 1000px) {
    width:100%;
    gap:0;
    padding:0;
    margin:5px 0;
 
  }
`

export const LeadershipDetails = styled.div`
display:flex;
flex-direction:column; 
align-items:baseline;

`

export const Title = styled.h3`
font-weight: 900;
letter-spacing: 0.05em;
letter-spacing: 0.1;
margin:2px 0;
font-size: 15px;
`
export const Date = styled.h3`
font-style: normal;
font-weight: 500;
margin:2px 0;
font-size: 10px;
letter-spacing: 0.05em;
`

export const Next = styled(GrFormNext)`
cursor:pointer;
font-size: 30px;
`



