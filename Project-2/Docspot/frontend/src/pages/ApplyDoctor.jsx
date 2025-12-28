import { useState } from "react";
import API from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function ApplyDoctor() {

  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); 
  const navigate = useNavigate();

  const showMessage = (msg, t) => {
    setMessage(msg);
    setType(t);

    setTimeout(() => {
      setMessage("");
      setType("");
    }, 2000);
  };

  const submit = async () => {

    if (!form.name || !form.email || !form.phone || !form.specialization) {
      showMessage("Please fill all required fields", "warning");
      return;
    }

    try {
      await API.post("/doctors/apply", form);
      showMessage("Doctor application submitted successfully", "success");

      setTimeout(() => navigate("/user"), 1500);
    } 
    catch {
      showMessage("Failed to submit application", "danger");
    }
  };

  return (
    <>
      <Header />

      <div className="container mt-4">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-bold">🩺 Apply As Doctor</h3>

          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/user")}
          >
            ⬅ Back to Dashboard
          </button>
        </div>

        {message && (
          <div className={`alert alert-${type} text-center fw-semibold`}>
            {message}
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-md-8 shadow p-4 rounded bg-white">

            <h5 className="fw-bold mb-2">👤 Personal Details</h5>

            <input className="form-control my-2" placeholder="Full Name"
              onChange={e => setForm({ ...form, name: e.target.value })} />

            <input className="form-control my-2" placeholder="Email"
              onChange={e => setForm({ ...form, email: e.target.value })} />

            <input className="form-control my-2" placeholder="Phone"
              onChange={e => setForm({ ...form, phone: e.target.value })} />

            <input className="form-control my-2" placeholder="Address"
              onChange={e => setForm({ ...form, address: e.target.value })} />

            <h5 className="fw-bold mt-3 mb-2">🏥 Professional Details</h5>

            <input className="form-control my-2" placeholder="Specialization"
              onChange={e => setForm({ ...form, specialization: e.target.value })} />

            <input className="form-control my-2" placeholder="Experience (Years)"
              onChange={e => setForm({ ...form, experience: e.target.value })} />

            <input className="form-control my-2" placeholder="Consultation Fees"
              onChange={e => setForm({ ...form, fees: e.target.value })} />

            <input className="form-control my-2" placeholder="Working Hours"
              onChange={e => setForm({ ...form, timing: e.target.value })} />

            <button className="btn btn-success w-100 mt-3 fw-bold" onClick={submit}>
              Submit Application
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
