import styled from "styled-components";

export const ServicesWrapper = styled.div`
display:flex;
gap: 150px;
justify-content: center;


@media (max-width: 1000px) {
  flex-direction: column;
  gap: 30px;
 }

`
export const Wrapper = styled.div`
background: #D4D4D4;
`

export const ServicesHeader = styled.h1`
 font-size: 1.5rem;
 font-style: normal;
 line-height: 3.5rem;
 font-weight: bolder;
 letter-spacing: 0.2em;
 text-align:center;

`

export const LineSvg = styled.svg`
height:50px;
width:100%;
margin-top:-50px;
& path{
  fill: none;
  stroke:rgba(224, 163, 45, 0.97);
}

`
export const ServiceWrapper = styled.div`
text-align:center;
 `

export const ServiceTitle = styled.h3`
font-weight: bolder;
color: rgba(2, 2, 2, 0.81);
font-size:1rem;
`