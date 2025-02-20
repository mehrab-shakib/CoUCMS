import { useState, useEffect } from "react";
import axios from "axios";

const Recruitment = () => {
    const [clubs, setClubs] = useState([]);
    const [clubId, setClubId] = useState("");
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/clubs")
            .then(response => setClubs(response.data))
            .catch(error => console.error("Error fetching clubs:", error));
    }, []);

    const handleApply = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/recruitment/apply", { club_id: clubId, reason })
            .then(response => setMessage(response.data.message))
            .catch(error => setMessage("Failed to apply"));
    };

    return (
        <div>
            <h2>Apply for Club Membership</h2>
            <form onSubmit={handleApply}>
                <select value={clubId} onChange={(e) => setClubId(e.target.value)} required>
                    <option value="">Select a Club</option>
                    {clubs.map(club => (
                        <option key={club.id} value={club.id}>{club.name}</option>
                    ))}
                </select>
                <textarea placeholder="Why do you want to join?" value={reason} onChange={(e) => setReason(e.target.value)} required />
                <button type="submit">Apply</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Recruitment;
