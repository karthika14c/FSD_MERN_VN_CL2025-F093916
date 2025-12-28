import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "90vh",
          backgroundImage: "url('data:image/jpeg;base64,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')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)"
          }}
        ></div>

        {/* Content */}
        <div className="container text-center mt-1 position-relative text-white">
          <h2 className="fw-bold" style={{ paddingTop: "30px" }}>
            Effortlessly Schedule Doctor Appointments
          </h2>

          <p className="text-light">
            Book appointments in seconds – your health in safe hands
          </p>

          <button
            className="btn btn-warning px-4 py-2 rounded-pill fw-semibold shadow mt-3 mb-4"
            style={{ fontSize: "16px" }}
            onClick={() => setShow(true)}
          >
            Book Appointment
          </button>
          <br />

          {show && (
            <div className="mt-2 alert alert-info w-50 m-auto">
              Please <Link to="/login">Login</Link> to Book Appointment
            </div>
          )}

          <img
            src="https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-3-professional-smiling-group-doctors-posing-png-image_12523737.png"
            width="34%"
            className="mt-4"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
