import { Link } from "react-router-dom";
import styled from "styled-components";


export const BlogsWrapper = styled.div`
width:100%;
display:flex;
gap:10px;
justify-content: center;
flex-wrap: wrap;
`

export const BlogWrapper = styled.div`
position: relative;
display: flex;
background-color:black;
justify-content: center;
margin-bottom: 5px; 
overflow: hidden;

`
export const BlogImage = styled.img`
width: ${props => props.width} ;
height:${props =>
    props.id === 1 ? "300px" : "250px"};  
object-fit:cover;
transition: transform .4s;

${BlogWrapper}:hover &{
    transform: scale(1.3);
    opacity:0.6;
    transform-origin: 50% 50%;
  }

@media (max-width: 1000px) {
    width: 350px;
 }

`

export const BlogTitle = styled.div`
position: absolute; 
line-height: 45px;
font-size: ${props => props.id === 1 ? "20px" : "initial"};
font-weight: ${props => props.id === 1 ? "bolder" : "700"};
letter-spacing: 0.3em;
bottom: ${props => props.id === 1 ? "10%" : "10%"}; 
color: white;
left: ${props => props.id === 1 ? "1%" : "5%"};
`

export const ReadMore = styled(Link)`
position: absolute; 
color:#C0A062;
font-weight:800;
text-decoration:none;
font-size: 15px;
bottom: ${props => props.id === 1 ? "4%" : "5%"}; 
left: ${props => props.id === 1 ? "1%" : "5%"};
`

