const Events = () => {
    const events = [
        { title: "Hackathon 2024", date: "March 15, 2024" },
        { title: "Cultural Fest", date: "April 20, 2024" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center p-6">
            <h2 className="text-3xl font-bold text-yellow-600 mb-6">Upcoming Events</h2>
            <div className="w-full max-w-2xl">
                {events.map((event, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                        <p className="text-gray-600">{event.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
