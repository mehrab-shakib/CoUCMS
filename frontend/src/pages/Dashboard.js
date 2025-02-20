import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [clubs, setClubs] = useState([]);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/clubs")
            .then(response => setClubs(response.data));

        axios.get("http://localhost:5000/api/recruitment/pending")
            .then(response => setApplications(response.data));
    }, []);

    const approveApplication = (id) => {
        axios.post(`http://localhost:5000/api/recruitment/approve/${id}`)
            .then(() => setApplications(applications.filter(app => app.id !== id)));
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>

            <h3>All Clubs</h3>
            <ul>
                {clubs.map(club => <li key={club.id}>{club.name}</li>)}
            </ul>

            <h3>Pending Applications</h3>
            <ul>
                {applications.map(app => (
                    <li key={app.id}>
                        {app.user} applied to {app.club}
                        <button onClick={() => approveApplication(app.id)}>Approve</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
