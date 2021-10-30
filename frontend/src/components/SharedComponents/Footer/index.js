import SocialMedia from "../SocialMedias";
import { FooterWrapper, FooterTitle, Copyright } from "./FooterElement";

const Footer = ({direction, color, copyright,gap}) =>{

    return(
     <>
      <FooterWrapper gap={gap}>
      <FooterTitle>Amara Randy Soumahoro</FooterTitle>
      <Copyright>{copyright}</Copyright>
      <SocialMedia flexDirection={direction} iconColor={color}/>
      </FooterWrapper>
     </>

    )

}

export default Footer;