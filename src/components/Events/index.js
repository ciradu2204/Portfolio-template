import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import howtothrive from "../../img/events/howtothriveintech.png";
import myhumblejourney from "../../img/events/myhumbleJourney.png";
import contributhon from "../../img/events/contributonwrapup.jpeg";

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
        {title: "She Code Africa Contributhon First Cohort Graduation",
        img: contributhon,
        description: "During the contributhon first cohort graduation, I gave a speech representing all the women who were part of the first cohort. The speech aimed to thank the organisers and open source organisations which were part of the cohort",
        attendees: 40
        }
        ,
        {
            title: "How to Thrive in Tech as a Woman",
            img: howtothrive,
            description: "To celebrate the international woman's day, I invited some of the alumni who are working well in tech to share tips and advice on how current students can better perform well in tech.",
            attendees: 15,
        },
        {
            title: "My humble Journey to Google",
            img: myhumblejourney,
            description: "Eunice Allela and Ebenezer Graham, recent graduates, and full-time Googlers shared their experience in college and advice on what students can do to get a good internship or job after college.",
            attendees: 23
        },
        {
           title: "GDSC ALC Info Session",
           img: "",
           description: "An info session to introduce students to what is GDSC(Google Developer Student Club) and the different opportunities we would be sharing throughout the year 2021.",
           attendees: 25,
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
      {events.filter((element, index) => index >= startIndex && index <=endIndex).map((event) => (
        <EventTemplate event={event} />
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
          height="150"
          image={event.img}
          alt={event.title}
        />
        <CardContent className='cardContent'>
          <Typography gutterBottom variant="p" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" >
            {event.description}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="inherit">
          {event.attendees} Attendees
        </Button>
      </CardActions>
    </Card>
  );
}