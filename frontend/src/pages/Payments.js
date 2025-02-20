import { useState } from "react";
import axios from "axios";

const Payments = () => {
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    const handlePayment = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/payments", { amount })
            .then(response => setMessage("Payment successful!"))
            .catch(error => setMessage("Payment failed."));
    };

    return (
        <div>
            <h2>Make a Payment</h2>
            <form onSubmit={handlePayment}>
                <input type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                <button type="submit">Pay Now</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Payments;
