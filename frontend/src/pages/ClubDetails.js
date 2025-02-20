import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const ClubDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [club, setClub] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/api/clubs/${id}`)
            .then(response => setClub(response.data))
            .catch(error => console.error("Error fetching club:", error));
    }, [id]);

    const handleJoinClub = () => {
        axios.post("http://localhost:5000/api/members/join", { club_id: id }, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        .then(response => setMessage(response.data.message))
        .catch(error => setMessage("Failed to join club"));
    };

    return (
        <div>
            {club ? (
                <>
                    <h2>{club.name}</h2>
                    <p>{club.description}</p>
                    <p>President: {club.president}</p>
                    {user && <button onClick={handleJoinClub}>Join Club</button>}
                    {message && <p>{message}</p>}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ClubDetails;
