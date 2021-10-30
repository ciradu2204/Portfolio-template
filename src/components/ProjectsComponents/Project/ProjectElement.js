import styled from "styled-components";
import {GrFormPrevious} from 'react-icons/gr';
import {GrFormNext} from 'react-icons/gr';

export const ProjectMainWrapper = styled.div`
display:flex;
width:100%;
flex-direction:row;
align-items:center;
justify-content:center;
`
export const ProjectWrapper = styled.div`
display:flex;
margin-top:40px;
flex-direction:column;
align-items:center;
`

export const Prev = styled(GrFormPrevious)`
color: #C0A062;
cursor:pointer;
position: fixed; 
top: 50%;
left:5px;
font-size:20px;
`

export const Next  = styled(GrFormNext)`
color: #C0A062;
cursor:pointer;
position: fixed; 
top: 50%;
right:5px;
font-size:20px;

`
export const ProjectImage = styled.img`
width:95%;
object-fit:cover;
height:300px;
`
export const NextProjectName = styled.h4`
position: fixed;
padding:10px; 
top:46%; 
right:2.5%;
font-weight:500; 
font-size: 15px;
background-color: #E5E5E5;

@media (max-width: 1000px) {
  display: none;
}
`

 export const PrevProjectName = styled.h4`
 position: fixed;
 padding:10px; 
 top:46%; 
 left:2.5%;
 font-weight:500; 
 font-size: 15px;
 background-color: #E5E5E5;

 @media (max-width: 1000px) {
  display: none;
}
`
export const ProjectTitle = styled.h3`
position: absolute; 
top:250px; 
font-size: 25px;
line-height: 52px;
text-align: center;
letter-spacing: 0.3em;
left: 6%;
color:white;
`
export const ProjectDescription = styled.p`
  width:90%;
  padding:20px;
  line-height:25px;
  background-color:  #E5E5E5;
`

export const ProjectVisual = styled.img`
width: 80%; 
height:auto
display:flex; 
justify-content:center;
`
export const ProjectVisualDescription = styled.p`
background-color:  #E5E5E5;
width:90%;
padding:20px;


`