import { useState } from "react";

const Clubs = () => {
    const clubs = [
        { name: "Programming Club", description: "Coding, Hackathons & Development" },
        { name: "Robotics Club", description: "AI, IoT, and Hardware Projects" },
        { name: "Cultural Club", description: "Music, Drama & Art Events" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center p-6">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">University Clubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {clubs.map((club, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 w-80">
                        <h3 className="text-xl font-semibold text-gray-800">{club.name}</h3>
                        <p className="text-gray-600 mt-2">{club.description}</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clubs;
