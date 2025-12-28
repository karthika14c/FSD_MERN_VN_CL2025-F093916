import { useEffect, useState } from "react";
import API from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

export default function UserDashboard() {
  const [profile, setProfile] = useState(null);

  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [notifCount, setNotifCount] = useState(0);

  const [show, setShow] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

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
    loadProfile();
    loadDoctors();
    loadAppointments();
  }, []);

  const loadProfile = async () => {
    const res = await API.get("/auth/me");
    setProfile(res.data);

    if (res.data.role === "doctor") navigate("/doctor-dashboard");
  };

  const loadDoctors = async () => {
    const res = await API.get("/doctors");
    setDoctors(res.data);
  };

  const loadAppointments = async () => {
    const res = await API.get("/appointments/user");
    setAppointments(res.data);

    const approved = res.data.filter(a => a.status === "approved").length;
    setNotifCount(approved);
  };

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setShow(true);
  };

 
  const bookAppointment = async () => {
  if (!date) {
    alert("Please select appointment date & time");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("doctorId", selectedDoctor._id);
    formData.append("date", date);

    if (file) {
      formData.append("document", file);
    }

    await API.post("/appointments/book", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    alert("Appointment Requested Successfully");
    setShow(false);
    setDate("");
    setFile(null);
    loadAppointments();

  } catch (err) {
    alert("Failed to book appointment");
  }
};


  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  if (!profile) return null;

  return (
    <>
      <Header />

      <div className="d-flex justify-content-between align-items-center px-4 mt-3">

        <h4 className="fw-bold">
          👋 Welcome, {profile.name}
        </h4>

        <div className="d-flex align-items-center gap-3">

          <Link to="/appointments" className="btn btn-outline-primary">
            📅 Your Appointments
          </Link>

          {profile.role !== "doctor" && (
            <Link to="/apply-doctor" className="btn btn-dark">
              🩺 Apply as Doctor
            </Link>
          )}

          <div className="position-relative">
            <span className="fs-4">🔔</span>
            {notifCount > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                {notifCount}
              </span>
            )}
          </div>

        </div>
      </div>

      <div className="container mt-3">
        {message && (
          <div className={`alert alert-${type} text-center fw-semibold`}>
            {message}
          </div>
        )}
      </div>

      <div className="container mt-3">

        <div className="p-3 rounded shadow-sm mb-3 bg-light">
          <input
            placeholder="🔍 Search doctors by specialization"
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h5 className="fw-bold mb-3">Available Doctors</h5>

        <div className="row">

          {doctors
            .filter(d =>
              d.specialization.toLowerCase().includes(search.toLowerCase())
            )
            .map(d => (
              <div className="col-md-4 mb-3" key={d._id}>
                <div className="card shadow-sm">

                  <div className="card-header text-dark fw-bold">
                    Dr. {d.name}
                  </div>

                  <div className="card-body">

                    <span className="badge bg-info text-dark mb-2">
                      {d.specialization}
                    </span>

                    <p><b>Experience:</b> {d.experience} yrs</p>
                    <p><b>Fees:</b> ₹{d.fees}</p>

                    <button
                      className="btn btn-primary w-100 mt-2"
                      onClick={() => openModal(d)}
                    >
                      Book Appointment
                    </button>

                  </div>
                </div>
              </div>
            ))}

          {doctors.length === 0 && (
            <div className="text-center text-secondary mt-3">
              <h6>No doctors available right now</h6>
            </div>
          )}
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          {selectedDoctor && (
            <>
              <p><b>Doctor:</b> Dr. {selectedDoctor.name}</p>
              <p><b>Specialization:</b> {selectedDoctor.specialization}</p>
            </>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Select Date & Time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Upload Report (Optional)</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>

          <Button variant="primary" onClick={bookAppointment}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
}
