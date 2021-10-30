import styled from "styled-components";

export const SkillsWrapper = styled.div`

`
export const UL = styled.ul`
display: grid;
grid-template-columns: repeat(2, 2fr);
gap:10px;
list-style-type: none;
padding:0;
margin:0;
margin-left:25px;
& li::before{
    content:'\\2192';
    font-size:20px;
    vertical-align:middle;
    color: rgba(192, 160, 98, 0.6);
}

@media (max-width: 1000px) {
     display:flex;
     flex-direction:column;
  }

`


export const LI = styled.li`
font-weight: 500;
padding:0 !important;
font-size: 15px;
line-height:25px;
letter-spacing: 0.05em;


`

export const SkillsHeader = styled.h2`
font-style: normal;
font-weight: 900;
font-size: 20px;
margin-left:2%;
letter-spacing: 0.3em;
`