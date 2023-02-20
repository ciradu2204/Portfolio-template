import SocialMedia from "../SocialMedias";
import { FooterWrapper, FooterLogo, Copyright } from "./FooterElement";
import logo  from "../../../img/logo.png"
const Footer = ({direction, color, copyright,gap}) =>{

    return(
     <>
      <FooterWrapper gap={gap}>
      <FooterLogo src={logo}/>
      <Copyright>{copyright}</Copyright>
      <SocialMedia flexDirection={direction} iconColor={color}/>
      </FooterWrapper>
     </>

    )

}

export default Footer;