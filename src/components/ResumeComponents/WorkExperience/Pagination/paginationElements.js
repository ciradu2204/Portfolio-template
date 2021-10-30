import styled from "styled-components";
import {GrFormNext} from "react-icons/gr";

export const UL = styled.ul`
display:flex;
flex-direction: row;
align-items:center;
justify-content:center;
list-style:none;
gap:2%

`

export const LI = styled.li`
`

export const A = styled.a`
text-decoration:none;
cursor:pointer;
color: ${props => (props.currentPage === props.number)? "black": "#767676"}
`
export const Next = styled(GrFormNext)`
cursor:pointer;
color:red !important;
font-size:20px;
`