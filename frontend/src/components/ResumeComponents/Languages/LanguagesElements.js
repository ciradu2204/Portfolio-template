import styled from "styled-components";

export const Wrapper = styled.div`
background: rgba(196, 196, 196, 0.19);
width:80%;
margin-left: 5%;
padding: 0px 15px;
margin-bottom:15px;
 `

export const LaunguagesHeader = styled.h2`
font-style: normal;
font-weight: 800;
font-size: 20px;
padding-top:10px;
letter-spacing: 0.3em;
`

export const LanguagesWrapper = styled.div`
display:flex;
margin-left: 5%;
gap:20%;
flex-direction: row;
`

export const LanguageWrapper = styled.div`
display:flex;
flex-direction:column;
padding-bottom:20px ;
`
export const Title = styled.h3`
font-weight: 700;
letter-spacing: 0.05em;
margin:2px 0;
font-size: 15px;

&::after{
content:"";
display:block;
width: 25px;
height: 2px;
background-color:rgba(224, 163, 45, 0.97);;
}
`

export const Level = styled.h3`
font-style: normal;
font-weight: 500;
margin:2px 0;
font-size: 13px;
letter-spacing: 0.05em;
`