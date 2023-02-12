import React from 'react';
import {Mail, Twitter, Wrapper, Link, LinkedIn} from './socialMediaElements'

const SocialMedia = ({direction, color}) =>{
   let channels = {
        Twitter: 'https://twitter.com/IraduCynthia',
        LinkedIn: 'https://www.linkedin.com/in/ciradu2204/',
        Email: 'ciradukunda2204@gmail.com',
    };

    return (
          <Wrapper flexDirection={direction} >
          <Link target="_blank" href={channels.Email}  >
          <Mail iconcolor={color}/>
          </Link>
          <Link target="_blank" href={channels.Twitter}>
          <Twitter iconcolor={color} />
          </Link>
          <Link target="_blank" href={channels.LinkedIn}>
          <LinkedIn iconcolor={color} />
          </Link>
          </Wrapper>
      )

}

export default SocialMedia;