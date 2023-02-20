import {EventsHeader, EventsIntro} from "./EventsElement"
import EventsHome from "../../components/Events"
import Footer from "../../components/Shared/Footer"
const Events = () => {

    return (
        <>
        <EventsHeader>EVENTS</EventsHeader>
        <EventsIntro>The different events I organised, hosted or invited to speak starting from university to now.</EventsIntro>
        <EventsHome/>
        <Footer/>
        </>
    )
}

export default Events