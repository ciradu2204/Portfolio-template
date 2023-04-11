import React from 'react';
import {Mail, Twitter, Wrapper, Link, LinkedIn, Github} from './socialMediaElements'

const SocialMedia = ({direction, color}) =>{
   let channels = {
        twitter: 'https://twitter.com/IraduCynthia',
        linkedIn: 'https://www.linkedin.com/in/ciradu2204/',
        email: 'ciradukunda2204@gmail.com',
        github: 'https://github.com/ciradu2204',
    };

    return (
          <Wrapper flexDirection={direction} >
          <Link href={`mailto:${channels.email}`}>
          <Mail iconcolor={color}/>
          </Link>
          <Link target="_blank" href={channels.twitter}>
          <Twitter iconcolor={color} />
          </Link>
          <Link target="_blank" href={channels.linkedIn}>
          <LinkedIn iconcolor={color} />
          </Link>
          <Link target="_blank" href={channels.github}>
          <Github iconcolor={color} />
          </Link>
          </Wrapper>
      )

}

export default SocialMedia;