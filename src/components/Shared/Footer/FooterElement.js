import styled from "styled-components";


export const FooterWrapper = styled.footer`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap:${props => props.gap || "25%" };
height:70px !important;
overflow: hidden;
border-top: solid 0.5px rgba(0, 0, 0, 0.25);

@media (max-width: 1000px) {
    flex-direction:column;
    height:auto;
    align-items:center;
   }
`
export const FooterLogo = styled.img`
 height: 150px;
 width: 150px;

`

export const Copyright = styled.p`
font-size: 12px;
align-self:flex-end;
@media (max-width: 1000px) {
    align-self:center;

  }

`

