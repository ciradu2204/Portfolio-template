import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import howtothrive from "../../img/events/howtothriveintech.jpeg";
import myhumblejourney from "../../img/events/myhumbleJourney.png";
import contributhon from "../../img/events/contributonwrapup.jpeg";
import openingCeremony from "../../img/events/openingceremony.jpeg";
import IWDKigali2023 from "../../img/events/IWDKigali2023.jpg"
import AWSUGLaunchEvent from "../../img/events/AWSUGLaunchEvent.png"
import IWDEACEvent from "../../img/events/IWDEACEvent.jpeg"
import AWSIAM from "../../img/events/AWS IAM.jpeg"

import "./index.css"
import { GrNext, GrPrevious } from 'react-icons/gr';
const Event = () => {
    const initialEndIndex = () => {
        if (window.innerWidth < 480) {
          return 0;
        } else if (window.innerWidth < 800) {
          return 1;
        } else {
          return 2;
        }
      };
    const [startIndex, setStartIndex] = React.useState(0);
    const [endIndex, setEndIndex] = React.useState(initialEndIndex());


    const events = [
      {
        title: "AWS IAM",
        img:AWSIAM,
        date: '22 July 2023',
        description: "Facilitated a session on AWS IAM as part of the AWS User Group Bootcamp and provided hands on on some of its features such as users, groups, roles, and creating a policy",
        attendees: 15
      }
      ,
      {
        title: "AWS User Group Launch Event",
        img: AWSUGLaunchEvent,
        date: "13th May 2023",
        description: "As an AWS User Group lead, I worked together with other organisers to organize our first event which marked the beginning of AWS User Group in Kigali. We had amazing speakers and guests from different companies including AWS and Safaricom ",
        attendees: 20
      },
      {
       title: "IWD EAC Event",
       date: "6th May 2023",
       img: IWDEACEvent,
       description: "Together with other WTM ambassadors from EAC, we organized an event to celebrate women in our communities and discuss on how we can do better.In addition, I gave a talk on OSS opportunites for Early Career in Tech ",
       attendees: 25
      },
      {
          title: "IWD Kigali 2023",
          date: "1st April 2023",
          img: IWDKigali2023,
          description: "As WTM ambassador, I organized an event to celebrate the international women's day in Kigali. The event had technical, non technical sessions, and panel discussions",
          attendees: 100
        },
        {title: "She Code Africa Contributhon First Cohort Graduation",
        img: contributhon,
        date: "1st May 2021",
        description: "During the contributhon first cohort graduation, I gave a speech representing all the women who were part of the first cohort. The speech aimed to thank the organisers and open source organisations who were part of the cohort",
        attendees: 40
        }
        ,
        {
            title: "How to Thrive in Tech as a Woman",
            img: howtothrive,
            date: "25th March 2021",
            description: "To celebrate the international woman's day, I invited some of the alumni who are working well in tech to share tips and advice on how current students can better perform well in tech.",
            attendees: 15,
        },
        {
            title: "My humble Journey to Google",
            img: myhumblejourney,
            date: "11th Dec 2020",
            description: "Eunice Allela and Ebenezer Graham, recent graduates, and full-time Googlers shared their experience in college and advice on what students can do to get a good internship or job after college.",
            attendees: 23
        },
        {
           title: "GDSC ALC Info Session",
           img: openingCeremony,
           description: "An info session to introduce students to what is GDSC(Google Developer Student Club) and the different opportunities we would be sharing throughout the year 2021.",
           attendees: 25,
           date: "2nd OCT 2020"
        },
    ]

    const handlePrev = () => {
        if(startIndex > 0){
            setStartIndex((prev) => prev -1);
            setEndIndex((prev) => prev -1);
        }
    }

    const handleNext = () => {
        if(endIndex < events.length -1){
            setStartIndex((prev) => prev +1);
            setEndIndex((prev) => prev +1);
        }
    }

    return (
      <div className='eventsContainer'>
        {startIndex > 0 &&<GrPrevious onClick={handlePrev} className="icon"/>}
      {events.filter((element, index) => index >= startIndex && index <=endIndex).map((event, index) => (
        <EventTemplate event={event} key={index}/>
      ))}
         {endIndex < events.length -1 && <GrNext  onClick={handleNext} className="icon"/>}
       </div>
    )
}
export default Event;

export function EventTemplate({event}) {
  return (
    <Card className="card">
        <CardMedia
          component="img"
          height="200"
          image={event.img}
          alt={event.title}
        />
        <CardContent className='cardContent'>
          <Typography gutterBottom variant="p" component="div" className='typography' >
            {event.title}
          </Typography>
          <Typography gutterBottom variant="p" component="div" className='typography' >
            {event.date}
          </Typography>
          <Typography variant="body2" >
            {event.description}
          </Typography>
        </CardContent>
      <CardActions className='cardActions'>
        <Button size="small" color="inherit">
          {event.attendees} Attendees
        </Button>
      </CardActions>
    </Card>
  );
}