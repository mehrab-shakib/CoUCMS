import { Link } from "react-router-dom";
import authContext from "../context/AuthContext";
import { useContext } from "react";

const Home = () => {
    const {user} = useContext(authContext);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-6">
            <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Welcome to <span className="text-blue-600">CoU Club Management System</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Manage clubs, members, events, and recruitments in one place.
                </p>

                <nav className="grid grid-cols-2 gap-4">
                    <Link to="/clubs" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-md transition">
                        View Clubs
                    </Link>
                    
                    {user ? (
            <Link to="/joinClub" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg shadow-md transition">
              Join a Club
            </Link>
          ) : (
            <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg shadow-md transition">
              Login to Join a Club
            </Link>
          )}
                    <Link to="/events" className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg shadow-md transition">
                        Upcoming Events
                    </Link>
                    <Link to="/payments" className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg shadow-md transition">
                        Make a Payment
                    </Link>
                </nav>

                <div className="mt-6">
                    <Link to="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-lg shadow-md transition">
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
