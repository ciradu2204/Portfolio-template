import {FaBars} from 'react-icons/fa'; 
import {NavLink as link } from 'react-router-dom';
import styled from 'styled-components';
import {AiFillCloseSquare} from 'react-icons/ai';

export const Nav = styled.nav`
padding-top:20px;
display:flex;
flex-direction: column;
`


export const Bars = styled(FaBars)`
display: none; 
padding: 5px;
font-size:30px;
color: #C0A062;
cursor:pointer;
@media (max-width: 1000px) {
    display: ${props => props.barclicked? `block` :`none`};
    position:absolute;
    top: 20px;
    align-self:flex-end;
}

`


export const CloseBar = styled(AiFillCloseSquare)`
display:none;
color: #C0A062;
position: absolute; 
top: 20px;
padding:10px; 
font-size:35px;
cursor:pointer;
align-self:flex-end;
z-index: 3;

@media (max-width: 1000px) {
    display:  ${props => props.closebarclicked? `block` : `none`};
    align-self:flex-end;
}
`
export const NavMenu = styled.div`
display:flex;
align-items:baseline;
&::before{
    content: "";
    display: inline; 
    width: 100px; 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;    
    padding:0;
    border: 1px solid rgba(224, 163, 45, 0.97);
}

@media (max-width: 1000px) {
    display: ${props => props.menumobileopen? `flex` : `none`};
    position:absolute;
    top: 0;
    height: 100%;
    padding: 25% 10%;
    z-index: 2;
    flex-direction: column; 
    gap: 50px;
    background-color: #D4D4D4;
    align-self:end;
    &::before{
        display: none;
    }
  }

`
 
export const NavLink = styled(link)`
position:relative !important;
font-size: 15px;
letter-spacing: 3px;
padding: 0 40px;
text-decoration: none;
font-style: normal; 
color:black;
transition: color .2s ease-out, transform .3s ease-out;


&::before{
    content:'${props => props.datalinktext}';
    display:block;
    transition: opacity .3s ease-out; 
    background-color: transparent;
    position: absolute;
    white-space: nowrap;
    width: 100%;
    opacity:0;
    transform:translateY(-50%);
    color:rgba(224, 163, 45, 0.97);
    height: 100%;
}

&:hover::before{
    opacity:1;
}

&:hover{
    transform: translateY(50%);
    color: transparent;
}

&.${props => props.activeClassName}{
    color: rgba(224, 163, 45, 0.97);
    fontweight: 900;
}
&.${props => props.activeClassName}:hover{
  transform:none;
  color: none;
}

&.${props => props.activeClassName}::before{
   display:none;
}

&:first-child{
    padding-left:  5px;
}

@media (max-width: 1000px) {
padding:0;
} 

`;


