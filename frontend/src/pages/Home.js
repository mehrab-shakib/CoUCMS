import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to Comilla University Club Management System</h1>
            <p>Manage clubs, members, events, and recruitments in one place.</p>

            <nav>
                <ul>
                    <li><Link to="/clubs">View Clubs</Link></li>
                    <li><Link to="/recruitment">Join a Club</Link></li>
                    <li><Link to="/events">Upcoming Events</Link></li>
                    <li><Link to="/payments">Make a Payment</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
