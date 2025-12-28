import { useEffect, useState } from "react";
import API from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Appointments() {

  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); 

  const showMessage = (msg, t) => {
    setMessage(msg);
    setType(t);

    setTimeout(() => {
      setMessage("");
      setType("");
    }, 2000);
  };

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const res = await API.get("/appointments/user");
      setAppointments(res.data);

      if (res.data.length === 0) {
        showMessage("You have no appointments yet", "info");
      }
    } catch {
      showMessage("Failed to load appointments", "danger");
    }
  };

  return (
    <>
      <Header />

      <div className="container mt-4">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-bold">📅 Your Appointments</h3>

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

        {appointments.length === 0 ? (
          <div className="text-center text-secondary mt-5">
            <h5>No Appointments Yet</h5>
            <p>Book an appointment from your dashboard</p>
          </div>
        ) : (

          <table className="table table-hover shadow-sm rounded mt-2">
            <thead className="table-dark">
              <tr>
                <th>Doctor</th>
                <th>Date & Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map(a => (
                <tr key={a._id}>

                  <td className="fw-semibold">
                    👨‍⚕️ Dr. {a?.doctorId?.name || "Unknown"}
                  </td>

                  <td>
                    {a.date
                      ? new Date(a.date).toLocaleString()
                      : "No date"}
                  </td>

                  <td>
                    {a.status === "approved" && (
                      <span className="badge bg-success px-3 py-2">
                        ✔ Approved
                      </span>
                    )}

                    {a.status === "pending" && (
                      <span className="badge bg-warning text-dark px-3 py-2">
                        Pending
                      </span>
                    )}

                    {a.status === "rejected" && (
                      <span className="badge bg-danger px-3 py-2">
                        Rejected
                      </span>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </>
  );
}
