import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [clubs, setClubs] = useState([
        
    ]);
    const [clubData, setClubData] = useState({ name: "", description: "" });

    // Dummy data for recent transactions
    const recentTransactions = [
        { id: 1, club: "Chess Club", amount: "$50", date: "2023-10-01" },
        { id: 2, club: "Drama Club", amount: "$30", date: "2023-10-02" },
        { id: 3, club: "Music Club", amount: "$20", date: "2023-10-03" },
    ];

    // Dummy data for pending member approvals
    const pendingApprovals = [
        { id: 1, name: "John Doe", club: "Chess Club", requestDate: "2023-10-01" },
        { id: 2, name: "Jane Smith", club: "Drama Club", requestDate: "2023-10-02" },
        { id: 3, name: "Alice Johnson", club: "Music Club", requestDate: "2023-10-03" },
    ];

    useEffect(() => {
        // Fetch clubs from the backend (if needed)
        axios.get("http://localhost:5000/api/clubs")
            .then(response => setClubs(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleChange = (e) => {
        setClubData({ ...clubData, [e.target.name]: e.target.value });
    };

    const addClub = async (e) => {
        e.preventDefault();
        try {
            // Add the new club to the backend (if needed)
            console.log(clubData); // Add this line to log the request payload
            await axios.post("http://localhost:5000/api/clubs/add", clubData);
            alert("Club added successfully");

            // Add the new club to the local state
            const newClub = { id: clubs.length + 1, ...clubData };
            setClubs([...clubs, newClub]);

            // Clear the form
            setClubData({ name: "", description: "" });
        } catch (error) {
            console.error(error);
            alert("Error adding club");
        }
    };

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 p-8 space-x-8">
            {/* Left Side Container */}
            <div className="w-1/2 space-y-8">
                {/* Add Club Form Container */}
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-600">Add Club</h2>
                    <form onSubmit={addClub} className="mt-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Club Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter club name"
                                value={clubData.name}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Description</label>
                            <textarea
                                name="description"
                                placeholder="Enter club description"
                                value={clubData.description}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Add Club
                        </button>
                    </form>
                </div>

                {/* All Clubs Container */}
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-600">All Clubs</h2>
                    <ul className="mt-6 space-y-2">
                        {clubs.map(club => (
                            <li key={club.id} className="p-3 bg-gray-100 rounded-lg">
                                <strong>{club.name}</strong> 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Side Container */}
            <div className="w-1/2 space-y-8">
                {/* Recent Transactions Container */}
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-600">Recent Transactions</h2>
                    <ul className="mt-6 space-y-2">
                        {recentTransactions.map(transaction => (
                            <li key={transaction.id} className="p-3 bg-gray-100 rounded-lg">
                                <strong>{transaction.club}</strong> - {transaction.amount} on {transaction.date}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pending Member Approvals Container */}
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-600">Pending Member Approvals</h2>
                    <ul className="mt-6 space-y-2">
                        {pendingApprovals.map(approval => (
                            <li key={approval.id} className="p-3 bg-gray-100 rounded-lg">
                                <strong>{approval.name}</strong> - {approval.club} (Requested on {approval.requestDate})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;