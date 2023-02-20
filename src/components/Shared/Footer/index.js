import SocialMedia from "../SocialMedias";
import { FooterWrapper, FooterTitle, Copyright } from "./FooterElement";

const Footer = ({direction, color, copyright,gap}) =>{

    return(
     <>
      <FooterWrapper gap={gap}>
      <FooterTitle>Cynthia Iradukunda</FooterTitle>
      <Copyright>{copyright}</Copyright>
      <SocialMedia flexDirection={direction} iconColor={color}/>
      </FooterWrapper>
     </>

    )

}

export default Footer;