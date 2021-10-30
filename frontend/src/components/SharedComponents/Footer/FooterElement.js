import styled from "styled-components";


export const FooterWrapper = styled.footer`
display:flex;
flex-direction: row; 
justify-content: center;
gap:${props => props.gap || "25%" };
height:70px;
border-top: solid 0.5px rgba(0, 0, 0, 0.25);

@media (max-width: 1000px) {
    flex-direction:column;
    height:auto;
    align-items:center;
   }
`
export const FooterTitle = styled.p`
font-style: normal;
font-size: 17px;
font-weight:500;
&:before{
    content: "";
    display: inline-block;
    border: 1px solid #C0A062;
    width:80px;
    margin-right:5px;
}
`

export const Copyright = styled.p`
font-size: 12px;
align-self:flex-end;
@media (max-width: 1000px) {
    align-self:center;

  }

`

