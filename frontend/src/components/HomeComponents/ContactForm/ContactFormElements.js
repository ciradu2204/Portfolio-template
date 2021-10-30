import styled from "styled-components";

export const Wrapper=styled.div`
background-color:#D4D4D4;
height:fit-content;
`

export const FormWrapper=styled.form`
display:flex;
margin-top:5px;
gap:20px;
flex-direction:column;
`

export const FormHeader= styled.h1`
font-size: 25px;
font-style: normal;
line-height: 75px;
font-weight: bolder;
letter-spacing: 0.2em;
text-align:center;
`

export const ElementWrapper= styled.div`
display:flex; 
width: 50%;
position:relative;
align-self:center;
flex-direction:column;
border:2px solid #C0A062;
height: ${props => props.id===3? "200px": "50px"};

@media (max-width: 1000px) {
   width:90%;
}

`
export const Input = styled.input`
position:absolute;
top:0px;
left:5px;
height:100%;
width:100%;
outline:none;
cursor:pointer;
font-size:18px;
background: transparent;
-webkit-appearance:none;
border:none;
&[type="submit"]{
  position:relative;
  width:unset;
    background: #C0A062;
    font-size:15px;
     top:5px;
    font-weight:bold;
    cursor:pointer;
    letter-spacing:3px;
    padding:10px 40px;
   border-radius: 10px;
   align-self:center;
   margin-bottom:2%;
  }
`

export const Label = styled.label`
position: relative;
top: -19px;
left:40px;
width:fit-content;
background-color:#D4D4D4;
letter-spacing:0.15em;
 `

export const TextArea = styled.textarea`
background-color:transparent;
position:absolute;
resize:none;
top:5px;
left:5px;
-webkit-appearance:none;
height:100%;
width:100%;
border:none;
font-size:18px;
outline:none;
`

export const Error = styled.h3`
color:red;
width: 48%;
margin:0;
font-size:15px;
align-self:center;
font-weight:bold;
`

export const Success = styled.h3`
color:green;
width: 100%;
margin:0;
font-size:15px;
text-align:center;
font-weight:bold;
`
