import { useState } from "react";

const Recruitment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Application Submitted!");
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h2 className="text-3xl font-bold text-green-600 mb-6">Join a Club</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg px-4 py-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg px-4 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition">
                        Apply Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Recruitment;
