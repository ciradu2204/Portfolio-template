import styled from 'styled-components'; 
import { keyframes } from 'styled-components';

const bouncingLoader = keyframes`
to {
    opacity: 0.1;
    transform: translate3d(0, -16px, 0);
  }
`

export const Loader = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;

& > div {
    width: 8px;
    height: 8px;
    margin: 3rem 0.2rem;
    background: #374140;
    border-radius: 50%;
    animation: ${bouncingLoader} 0.6s infinite alternate;
}

& > div:nth-child(2){
    animation-delay: 0.2s;  
}

&>div:nth-chile(3){
    animation-delay: 0.4s;
}
`




 
 
 