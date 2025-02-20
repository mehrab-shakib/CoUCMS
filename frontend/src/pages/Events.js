import { useState, useEffect } from "react";
import axios from "axios";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/events")
            .then(response => setEvents(response.data))
            .catch(error => console.error("Error fetching events:", error));
    }, []);

    return (
        <div>
            <h2>Upcoming Events</h2>
            {events.length > 0 ? (
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            <h3>{event.name}</h3>
                            <p>Date: {event.date}</p>
                            <p>Venue: {event.venue}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No upcoming events.</p>
            )}
        </div>
    );
};

export default Events;
