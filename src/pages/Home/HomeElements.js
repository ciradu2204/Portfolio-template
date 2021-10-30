import styled from 'styled-components';
import {HiOutlineArrowNarrowDown} from 'react-icons/hi';
import { keyframes } from 'styled-components';

const moveUpDownAnimation = keyframes`
 
 from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(25%);
  }

 `
export const DownIcon = styled(HiOutlineArrowNarrowDown)`
color:rgba(224, 163, 45, 0.97);
font-size: 50px; 
cursor:pointer;
animation: ${moveUpDownAnimation} 2s infinite linear 
`

export const Header = styled.div`
font-size: 50px; 
width: 100%;
color:#020202;
text-align:center;
gap:10px;
 
@media (max-width: 1000px) {
    font-size:40px;
 }
 
`

export const Bold = styled.strong`
  font-weight:bold;
`


export const Wrapper = styled.div`
display:flex;
height:85vh; 
overflow:auto;
align-items:center;
`
 