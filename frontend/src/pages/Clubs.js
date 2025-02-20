import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Clubs = () => {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/clubs")
            .then(response => setClubs(response.data))
            .catch(error => console.error("Error fetching clubs:", error));
    }, []);

    return (
        <div>
            <h2>All Clubs</h2>
            {clubs.length > 0 ? (
                <ul>
                    {clubs.map(club => (
                        <li key={club.id}>
                            <h3>{club.name}</h3>
                            <p>{club.description}</p>
                            <Link to={`/clubs/${club.id}`}>View Details</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No clubs available.</p>
            )}
        </div>
    );
};

export default Clubs;
