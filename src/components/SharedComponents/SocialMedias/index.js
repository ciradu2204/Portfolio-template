import React, {useState, useEffect} from 'react';
import {Facebook, Mail, Instagram, Twitter, Wrapper, Link} from './socialMediaElements'
import { API } from '../../../constants';
import axios from 'axios';

const SocialMedia = ({direction, color}) =>{
    const [channels, setChannels] = useState({
        Facebook: '', 
        Twitter: '', 
        Instagram: '', 
        Email: '', 
     })

    const fetchChannels = async() => {

        await axios.get(`${API}/wp-json/wp/v2/socialmediachannels?&filter[orderby]=date&order=asc`)
        .then((response) => {
            let channels = response.data[0].acf.channels
            setChannels({
                Facebook: channels.facebook_link,
                Twitter: channels.twitter_link,
                Instagram:channels.instagram_link,
                Email: channels.email
            })
            })
           .catch((error) => {
               console.log(error);
           })

    }

    useEffect(() => {
        fetchChannels();
        return () => {
          setChannels({});
        };
    }, [ ])





    return (
          <Wrapper flexDirection={direction} >
          <Link target="_blank" href={channels.Facebook} >
          <Facebook iconcolor={color}/>
          </Link>
          <Link target="_blank" href={channels.Email}  >
          <Mail iconcolor={color}/>
          </Link>
          <Link target="_blank" href={channels.Instagram} >
          <Instagram iconcolor={color}/>
          </Link>
          <Link target="_blank" href={channels.Twitter}>
          <Twitter iconcolor={color} />
          </Link>
          </Wrapper>
      )

}

export default SocialMedia; 