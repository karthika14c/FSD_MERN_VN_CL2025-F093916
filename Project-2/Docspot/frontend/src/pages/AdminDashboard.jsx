import { useEffect, useState } from "react";
import API from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AdminDashboard() {

  const [tab, setTab] = useState("doctors"); 
  const [doctors, setDoctors] = useState([]);
  const [users, setUsers] = useState([]);
  const [notifCount, setNotifCount] = useState(0);

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
    loadDoctors();
    loadUsers();
  }, []);

  const loadDoctors = async () => {
    const res = await API.get("/doctors/admin");
    setDoctors(res.data);

    const pending = res.data.filter(d => d.status === "pending").length;
    setNotifCount(pending);
  };

  const loadUsers = async () => {
    const res = await API.get("/auth/get-users");
    setUsers(res.data);
  };

  const approve = async (id) => {
    try {
      await API.put(`/doctors/approve/${id}`, { status: "approved" });
      loadDoctors();
      showMessage("Doctor Approved Successfully", "success");
    } catch {
      showMessage("Failed to approve doctor", "danger");
    }
  };

  const reject = async (id) => {
    try {
      await API.put(`/doctors/approve/${id}`, { status: "rejected" });
      loadDoctors();
      showMessage("Doctor Rejected", "danger");
    } catch {
      showMessage("Failed to reject doctor", "danger");
    }
  };

  return (
    <>
      <Header />
      <div className="admin-top-bar">
        <div className="d-flex gap-3">

          <button
            className={`admin-tab ${tab === "users" ? "active" : ""}`}
            onClick={() => setTab("users")}
          >
            Users
          </button>

          <button
            className={`admin-tab ${tab === "doctors" ? "active" : ""}`}
            onClick={() => setTab("doctors")}
          >
            Doctors
          </button>

          <div className="position-relative bell">
            🔔
            {notifCount > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                {notifCount}
              </span>
            )}
          </div>

        </div>
      </div>

      {message && (
        <div className={`alert alert-${type} text-center fw-semibold`}>
          {message}
        </div>
      )}

      <div className="container mt-4 mb-5">

        {tab === "users" && (
          <div className="admin-card">
            <h3 className="section-title">Users</h3>
            <p className="section-sub">List of all registered users</p>

            {users.length === 0 ? (
              <p className="text-secondary">No users found</p>
            ) : (
              <table className="table custom-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map(u => (
                    <tr key={u._id}>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>
                        <span className="role-badge">{u.role}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {tab === "doctors" && (
          <div className="admin-card">
            <h3 className="section-title">Doctors Management</h3>

            {doctors.length === 0 ? (
              <p className="text-secondary">No doctors found</p>
            ) : (
              <table className="table custom-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Specialization</th>
                    <th>Experience</th>
                    <th>Fees</th>
                    <th>Timing</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {doctors.map(d => (
                    <tr key={d._id}>
                      <td>{d.name}</td>
                      <td>{d.specialization}</td>
                      <td>{d.experience} Yrs</td>
                      <td>₹{d.fees}</td>
                      <td>{d.timing}</td>

                      <td>
                        <span className={`status-badge ${d.status}`}>
                          {d.status}
                        </span>
                      </td>

                      <td>
                        {d.status === "pending" ? (
                          <>
                            <button
                              className="btn btn-success btn-sm me-2"
                              onClick={() => approve(d._id)}
                            >
                              Approve
                            </button>

                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => reject(d._id)}
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <span className="text-muted">No Action</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

      </div>

      <Footer />
    </>
  );
}
