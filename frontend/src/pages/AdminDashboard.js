import { useEffect, useState } from "react";

const AdminDashboard = () => {
    const [recruitments, setRecruitments] = useState([]);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch("/api/recruitments/pending")
            .then((res) => res.json())
            .then((data) => setRecruitments(data));

        fetch("/api/payments/pending")
            .then((res) => res.json())
            .then((data) => setPayments(data));
    }, []);

    const approveRecruitment = (id) => {
        fetch(`/api/recruitments/approve-recruitment/${id}`, { method: "PUT" })
            .then(() => setRecruitments(recruitments.filter(r => r.id !== id)));
    };

    const approvePayment = (id) => {
        fetch(`/api/payments/approve-payment/${id}`, { method: "PUT" })
            .then(() => setPayments(payments.filter(p => p.id !== id)));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Admin Dashboard</h2>

            <h3 className="text-xl mt-4">Pending Recruitments</h3>
            {recruitments.map((r) => (
                <button onClick={() => approveRecruitment(r.id)}>Approve</button>
            ))}

            <h3 className="text-xl mt-4">Pending Payments</h3>
            {payments.map((p) => (
                <button onClick={() => approvePayment(p.id)}>Approve</button>
            ))}
        </div>
    );
};

export default AdminDashboard;
