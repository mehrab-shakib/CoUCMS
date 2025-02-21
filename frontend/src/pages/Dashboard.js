import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
      // Dummy data for registered clubs
    const [registeredClubs, setRegisteredClubs] = useState([
        { id: 1, name: "Chess Club", description: "A club for chess enthusiasts." },
        { id: 2, name: "Music Club", description: "A place for musicians and music lovers." },
    ]);

    // Dummy data for available clubs to join
    const [availableClubs, setAvailableClubs] = useState([
        { id: 3, name: "Drama Club", description: "For those who love acting and theater." },
        { id: 4, name: "Photography Club", description: "A club for photography enthusiasts." },
    ]);

    // Dummy data for events in registered clubs
    const [events, setEvents] = useState([
        { id: 1, clubId: 1, title: "Chess Tournament", date: "2023-10-15" },
        { id: 2, clubId: 2, title: "Music Jam Session", date: "2023-10-20" },
    ]);

    // Dummy data for notifications
    const [notifications, setNotifications] = useState([
        { id: 1, message: "Chess Club: New tournament announced!", date: "2023-10-10" },
        { id: 2, message: "Music Club: Jam session postponed.", date: "2023-10-11" },
    ]);

    // Dummy data for messages
    const [messages, setMessages] = useState([
        { id: 1, from: "Chess Club", message: "Don't forget to register for the tournament!", date: "2023-10-09" },
        { id: 2, from: "Music Club", message: "New instruments have arrived.", date: "2023-10-08" },
    ]);

    // Dummy data for pending requests
    const [pendingRequests, setPendingRequests] = useState([
        { id: 1, club: "Drama Club", requestDate: "2023-10-05" },
        { id: 2, club: "Photography Club", requestDate: "2023-10-06" },
    ]);

    // Function to join a club
    const joinClub = (clubId) => {
        const clubToJoin = availableClubs.find(club => club.id === clubId);
        if (clubToJoin) {
            setRegisteredClubs([...registeredClubs, clubToJoin]);
            setAvailableClubs(availableClubs.filter(club => club.id !== clubId));
            alert(`Joined ${clubToJoin.name}`);
        }
    };

    // Function to leave a club
    const leaveClub = (clubId) => {
        const clubToLeave = registeredClubs.find(club => club.id === clubId);
        if (clubToLeave) {
            setRegisteredClubs(registeredClubs.filter(club => club.id !== clubId));
            setAvailableClubs([...availableClubs, clubToLeave]);
            alert(`Left ${clubToLeave.name}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Grid Container */}
            <div className="grid grid-cols-2 gap-8">
                {/* Registered Clubs Section */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-600">Registered Clubs</h2>
                    <ul className="mt-4 space-y-2">
                        {registeredClubs.map(club => (
                            <li key={club.id} className="p-3 bg-gray-100 rounded-lg flex justify-between items-center">
                                <div>
                                    <strong>{club.name}</strong> - {club.description}
                                </div>
                                <button
                                    onClick={() => leaveClub(club.id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                                >
                                    Leave Club
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Available Clubs Section */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-600">Available Clubs</h2>
                    <ul className="mt-4 space-y-2">
                        {availableClubs.map(club => (
                            <li key={club.id} className="p-3 bg-gray-100 rounded-lg flex justify-between items-center">
                                <div>
                                    <strong>{club.name}</strong> - {club.description}
                                </div>
                                <button
                                    onClick={() => joinClub(club.id)}
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                                >
                                    Join Club
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Events Section */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-600">Upcoming Events</h2>
                    <ul className="mt-4 space-y-2">
                        {events.map(event => (
                            <li key={event.id} className="p-3 bg-gray-100 rounded-lg">
                                <strong>{event.title}</strong> - {event.date}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Notifications Section */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-600">Notifications</h2>
                    <ul className="mt-4 space-y-2">
                        {notifications.map(notification => (
                            <li key={notification.id} className="p-3 bg-gray-100 rounded-lg">
                                <strong>{notification.message}</strong> - {notification.date}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Messages Section */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-600">Messages</h2>
                    <ul className="mt-4 space-y-2">
                        {messages.map(message => (
                            <li key={message.id} className="p-3 bg-gray-100 rounded-lg">
                                <strong>{message.from}</strong>: {message.message} - {message.date}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pending Requests Section */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-600">Pending Requests</h2>
                    <ul className="mt-4 space-y-2">
                        {pendingRequests.map(request => (
                            <li key={request.id} className="p-3 bg-gray-100 rounded-lg">
                                <strong>{request.club}</strong> - Requested on {request.requestDate}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
