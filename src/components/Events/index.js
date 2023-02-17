import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import howtothrive from "../img/events/howtothriveintech.png";
import myhumblejourney from "../img/events/howtothriveintech.png";


const Event = () => {

    const events = [
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
            attendes: 23
        },
    ]

    return (
        <>
      {events.map((event) => (
        <EventTemplate event={event} />
      ))}
       </>
    )
}
export default Event;

export function EventTemplate({event}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={event.image}
          alt={event.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {event.attendes}
        </Button>
      </CardActions>
    </Card>
  );
}