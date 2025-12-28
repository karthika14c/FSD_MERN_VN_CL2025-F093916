import { useEffect, useState } from "react";
import API from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge, Button } from "react-bootstrap";

export default function DoctorDashboard() {

  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [notifCount, setNotifCount] = useState(0);

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    loadDoctor();
    loadAppointments();
  }, []);

  const loadDoctor = async () => {
    const res = await API.get("/auth/me");

    if (res.data.role !== "doctor") {
      window.location.href = "/user";
      return;
    }

    setDoctor(res.data);
  };

  const loadAppointments = async () => {
    const res = await API.get("/appointments/doctor");
    setAppointments(res.data);
    setNotifCount(res.data.filter(a => a.status === "pending").length);
  };

  const showMessage = (msg, t) => {
    setMessage(msg);
    setType(t);

    setTimeout(() => {
      setMessage("");
      setType("");
    }, 2000);
  };

  const accept = async (id) => {
    await API.put(`/appointments/status/${id}`, { status: "approved" });
    loadAppointments();
    showMessage("Appointment Approved Successfully", "success");
  };

  const reject = async (id) => {
    await API.put(`/appointments/status/${id}`, { status: "rejected" });
    loadAppointments();
    showMessage("Appointment Rejected", "danger");
  };

  if (!doctor) return null;

  return (
    <>
      <Header />

      <div className="doctor-top d-flex justify-content-between align-items-center px-4 mt-3">
        <div>
          <h3 className="fw-bold">👨‍⚕️ Dr. {doctor.name}</h3>
        </div>

        <div className="position-relative bell">
          🔔
          {notifCount > 0 && (
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
              {notifCount}
            </span>
          )}
        </div>
      </div>

      <div className="container mt-3">

        {message && (
          <div className={`alert alert-${type} text-center fw-semibold`}>
            {message}
          </div>
        )}

      </div>

      <div className="container mt-2 mb-4">
        <div className="doctor-card">

          <h4 className="section-title">Doctor Appointments</h4>

          {appointments.length === 0 ? (
            <p className="text-secondary mt-3">No appointments yet</p>
          ) : (
            <table className="table doc-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Document</th>
                  <th>Status</th>
                  <th width="220px">Action</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map(appt => (
                  <tr key={appt._id}>
                    <td>{appt?.userId?.name || "Unknown"}</td>
                    <td>{appt?.userId?.phone || "No phone"}</td>
                    <td>{appt.date ? new Date(appt.date).toLocaleString() : "No date"}</td>

                    <td>
                      {appt.document ? (
                        <a
                          href={`http://localhost:5000${appt.document}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </a>

                      ) : (
                        <span className="text-danger">No document</span>
                      )}
                    </td>

                    <td>
                      <span className={`status-badge ${appt.status}`}>
                        {appt.status}
                      </span>
                    </td>

                    <td>
                      {appt.status === "pending" ? (
                        <>
                          <Button
                            variant="success"
                            size="sm"
                            className="me-2"
                            onClick={() => accept(appt._id)}
                          >
                            Accept
                          </Button>

                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => reject(appt._id)}
                          >
                            Reject
                          </Button>
                        </>
                      ) : (
                        <span className="text-secondary">No Action</span>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}
