import React from 'react';
import {Facebook, Mail, Instagram, Twitter, Wrapper, Link} from './socialMediaElements'

const SocialMedia = ({direction, color}) =>{

    return (
          <Wrapper flexDirection={direction} >
          <Link target="_blank" href="https://github.com/styled-components/styled-components" >
          <Facebook iconcolor={color}/>
          </Link>
          <Link target="_blank" href="https://github.com/styled-components/styled-components" >
          <Mail iconcolor={color}/>
          </Link>
          <Link target="_blank" href="https://github.com/styled-components/styled-components" >
          <Instagram iconcolor={color}/>
          </Link>
          <Link target="_blank" href="https://github.com/styled-components/styled-components" >
          <Twitter iconcolor={color} />
          </Link>
          </Wrapper>
      )

}

export default SocialMedia; 