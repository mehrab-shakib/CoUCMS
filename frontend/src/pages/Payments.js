const Payments = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Online Payment</h2>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-lg transition">
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default Payments;
