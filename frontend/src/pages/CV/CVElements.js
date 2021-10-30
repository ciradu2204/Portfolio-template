import styled from "styled-components";

export const Wrapper = styled.div`

display:flex;
gap: 15%;
margin:0 60px;
flex-direction:row;

@media (max-width: 1000px) {
    width:100%;
    flex-direction:column;
    margin:0 15px;
  }
`