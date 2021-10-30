import styled, {css} from "styled-components"



export const HobbiesWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content:center;

`

export const HobbyWrapper = styled.div`
justify-content: center;
align-items:center;
display:flex; 
gap: 20px;
height:200px;
padding:50px;
   ${props => props.id%2 === 0 &&  css`
   flex-direction: row; `}

   ${props => props.id%2 !== 0 && css` 
   background-color: #D4D4D4;
   flex-direction: row-reverse;
   `}
    
    
    ${props => props.id === 3  && css` 
    background-color: #D4D4D4;
    flex-direction:column;
    height:auto; 
    `}

    @media (max-width: 1000px) {
      flex-direction: column;
      height:auto;
    }

`

export const HobbyImage = styled.img`
width:45%;
height:auto;
${props => props.id === 3  && css` 
width:98%;
background-color: #D4D4D4;
flex-direction:column;
`}

@media (max-width: 1000px) {
  width:100%;
  height:auto;
}


`

export const HobbyContent = styled.p`

`